import { makeRegisterOrgUseCase } from '@/use-cases/factories/orgs/make-register-org'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerOrg(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerOrgBodySchema = z.object({
    name: z.string(),
    adress: z.string(),
    phone: z.number(),
    email: z.string().email(),
    password: z.string(),
  })

  const { adress, email, name, password, phone } = registerOrgBodySchema.parse(
    request.body,
  )

  const registerOrgUseCase = makeRegisterOrgUseCase()
  const org = await registerOrgUseCase.execute({
    adress,
    email,
    name,
    password,
    phone,
  })
  return reply.status(201).send({ org })
}
