import { FastifyInstance } from 'fastify'
import { createPets } from './search-pets'

export async function petsRoutes(app: FastifyInstance) {
  app.post('/pets/create', createPets)
}
