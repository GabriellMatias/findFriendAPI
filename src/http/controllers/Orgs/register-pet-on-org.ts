import { makeCreatePetsUseCase } from '@/use-cases/factories/pets/make-create-pets-UseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerPetOnOrg(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createPetBodySchema = z.object({
    name: z.string(),
    city: z.string(),
    isAdopted: z.boolean().default(false),
    orgId: z.string(),
  })

  const { city, isAdopted, name, orgId } = createPetBodySchema.parse(
    request.body,
  )

  const createPetUseCase = makeCreatePetsUseCase()
  const pet = await createPetUseCase.execute({
    city,
    isAdopted,
    name,
    orgId,
  })
  return reply.status(201).send({ pet })
}
