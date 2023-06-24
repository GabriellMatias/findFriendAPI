import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { CreatePetUseCase } from '@/use-cases/pets/create-pet-useCase'

/* Factories para criar os casos de uso, facilitar */
export function makeCreatePetsUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new CreatePetUseCase(petsRepository)
  return useCase
}
