import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { SearchPetsToAdoptedByCityUseCase } from '@/use-cases/pets/search-pets-to-adopted-by-city'

/* Factories para criar os casos de uso, facilitar */
export function makeSearchPetsToAdoptedByCityUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new SearchPetsToAdoptedByCityUseCase(petsRepository)
  return useCase
}
