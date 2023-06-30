import { PrismaOwnersRepository } from '@/repositories/prisma/prisma-owners-repository'
import { CreateOwnerUseCase } from '@/use-cases/owners/create-owner-useCase'

/* Factories para criar os casos de uso, facilitar */
export function makeCreateOwnerUseCase() {
  const prismaUserRepository = new PrismaOwnersRepository()
  const useCase = new CreateOwnerUseCase(prismaUserRepository)
  return useCase
}
