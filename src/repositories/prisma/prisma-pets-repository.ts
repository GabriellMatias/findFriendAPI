import { Prisma } from '@prisma/client'
import { PetsRepositoryProps } from '../interfaces/interface-pets-repository'
import { prisma } from '@/lib/prisma'

export class PrismaPetsRepository implements PetsRepositoryProps {
  async create(data: Prisma.PetCreateInput) {
    const pet = prisma.pet.create({
      data,
    })
    return pet
  }

  async listUnadoptedPetsByCity(city: string) {
    const unAdoptedPets = prisma.pet.findMany({
      where: {
        city,
        is_adopted: false,
      },
    })
    return unAdoptedPets
  }

  async listPetsByOrg(OrgId: string) {
    const petsByOrg = prisma.pet.findMany({
      where: {
        org_id: OrgId,
      },
    })
    return petsByOrg
  }

  async listPetsByOwner(OwnerId: string) {
    const petsByOrg = prisma.pet.findMany({
      where: {
        owner_id: OwnerId,
      },
    })
    return petsByOrg
  }
}
