import { FastifyInstance } from 'fastify'
import { createPets } from './create-pet'
import { searchPetsToAdoptedInSpecifyCity } from './search-pet-to-adopted-in-specific-city'

export async function petsRoutes(app: FastifyInstance) {
  app.post('/pets/create', createPets)
  app.post('/pets/searchByCity', searchPetsToAdoptedInSpecifyCity)
}
