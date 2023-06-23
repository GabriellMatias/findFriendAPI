import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { SearchPetsToAdoptedByCityUseCase } from '../pets/search-pets-to-adopted-by-city'

/* Factories para criar os casos de uso, facilitar */
export function makeSearchPetsToAdoptedByCityUseCase() {
  const checkInRepository = new PrismaPetsRepository()
  const useCase = new SearchPetsToAdoptedByCityUseCase(checkInRepository)
  return useCase
}
