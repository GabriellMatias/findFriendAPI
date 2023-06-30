import { makeGetOwnerProfileUseCase } from '@/use-cases/factories/owners/make-get-owner-profile-UseCase'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const getUserProfile = makeGetOwnerProfileUseCase()
  const { owner } = await getUserProfile.execute({
    ownerId: request.user.sub,
  })

  return reply.status(200).send({
    owner: {
      ...owner,
    },
  })
}
