import { InvalidCredentiasError } from '@/use-cases/erros/invalid-credentials-erro'
import { makeAuthenticateUseCase } from '@/use-cases/factories/orgs/make-authenticate-org'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = authenticateBodySchema.parse(request.body)
  try {
    const authenticateUseCase = makeAuthenticateUseCase()
    const { org } = await authenticateUseCase.execute({
      email,
      password,
    })

    const token = await reply.jwtSign({
      sign: {
        sub: org.id,
      },
    })
    const refreshToken = await reply.jwtSign({
      sign: {
        sub: org.id,
        expiresIn: '7d',
      },
    })
    return reply
      .setCookie('refreshToken', refreshToken, {
        /* Quem pode ter acesso */
        path: '/',
        /* Apenas rotas https - front end nao consegue ler o valor como tipo bruto */
        secure: true,
        /* acessivel apenas do msm dominio */
        sameSite: true,
        /* acessado apenas pelo back-end e nao vai ficar salvo no front end */
        httpOnly: true,
      })
      .status(200)
      .send({ token })
  } catch (error) {
    if (error instanceof InvalidCredentiasError) {
      return reply.status(409).send({ message: error.message })
    }
    throw error
  }
}
