import { makeSearchPetsUseCase } from '@/use-cases/factories/pets/make-search-pets'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function searchPets(request: FastifyRequest, reply: FastifyReply) {
  const searchPetsQuerySchema = z.object({
    q: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { page, q } = searchPetsQuerySchema.parse(request.query)

  const searchPetsUseCase = makeSearchPetsUseCase()
  const { pets } = await searchPetsUseCase.execute({
    page,
    query: q,
  })

  return reply.status(200).send(pets)
}
