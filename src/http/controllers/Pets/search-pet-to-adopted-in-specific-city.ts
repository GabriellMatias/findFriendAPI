import { makeSearchPetsToAdoptedByCityUseCase } from '@/use-cases/factories/pets/make-search-pets-to-adopted-by-city'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function searchPetsToAdoptedInSpecifyCity(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchPetsToAdoptedInSpecifyCitySchema = z.object({
    city: z.string(),
  })

  const { city } = searchPetsToAdoptedInSpecifyCitySchema.parse(request.body)

  const searchPetToAdoptedByCityUseCase = makeSearchPetsToAdoptedByCityUseCase()
  const pet = await searchPetToAdoptedByCityUseCase.execute({ city })
  return reply.status(201).send({ pet })
}
