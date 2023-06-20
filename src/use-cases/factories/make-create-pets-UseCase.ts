import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { CreatePetUseCase } from '../create-pet-useCase'

/* Factories para criar os casos de uso, facilitar */
export function makeCreatePetsUseCase() {
  const checkInRepository = new PrismaPetsRepository()
  const useCase = new CreatePetUseCase(checkInRepository)
  return useCase
}
