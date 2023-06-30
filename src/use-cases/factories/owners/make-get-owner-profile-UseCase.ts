import { PrismaOwnersRepository } from '@/repositories/prisma/prisma-owners-repository'
import { GetOwnerProfileUseCase } from '@/use-cases/owners/getOwnerProfile'

/* Factories para criar os casos de uso, facilitar */
export function makeGetOwnerProfileUseCase() {
  const prismaUserRepository = new PrismaOwnersRepository()
  const useCase = new GetOwnerProfileUseCase(prismaUserRepository)
  return useCase
}
