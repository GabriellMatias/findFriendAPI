import { makeCreateOwnerUseCase } from '@/use-cases/factories/owners/make-create-ownerUseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createOwner(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createOwnerBodySchema = z.object({
    name: z.string(),
  })

  const { name } = createOwnerBodySchema.parse(request.body)

  const createOwnerUseCase = makeCreateOwnerUseCase()
  const Owner = await createOwnerUseCase.execute({
    name,
  })
  return reply.status(201).send({ Owner })
}
