import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { SearchPetsUseCase } from '@/use-cases/pets/search-pets-UseCase'

/* Factories para criar os casos de uso, facilitar */
export function makeSearchPetsUseCase() {
  const checkInRepository = new PrismaPetsRepository()
  const useCase = new SearchPetsUseCase(checkInRepository)
  return useCase
}
