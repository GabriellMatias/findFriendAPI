import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { AuthenticateUseCase } from '@/use-cases/orgs/authenticate-orgUseCase'

/* Factories para criar os casos de uso, facilitar */
export function makeAuthenticateUseCase() {
  const prismaOrgRepository = new PrismaOrgsRepository()
  const useCase = new AuthenticateUseCase(prismaOrgRepository)
  return useCase
}
