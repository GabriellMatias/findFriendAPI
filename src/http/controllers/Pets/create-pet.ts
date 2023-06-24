import { makeCreatePetsUseCase } from '@/use-cases/factories/pets/make-create-pets-UseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createPets(request: FastifyRequest, reply: FastifyReply) {
  const createPetBodySchema = z.object({
    name: z.string(),
    city: z.string(),
    isAdopted: z.boolean().default(false),
  })

  const { city, isAdopted, name } = createPetBodySchema.parse(request.body)

  const createPetUseCase = makeCreatePetsUseCase()
  const pet = await createPetUseCase.execute({
    city,
    isAdopted,
    name,
  })
  return reply.status(201).send({ pet })
}
