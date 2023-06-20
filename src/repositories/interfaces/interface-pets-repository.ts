import { Pet, Prisma } from '@prisma/client'

export interface PetsRepositoryProps {
  create(data: Prisma.PetCreateInput): Promise<Pet>
  listUnadoptedPets(): Promise<Pet[] | Pet>
  listPetsByOrg(OrgId: string): Promise<Pet[] | Pet>
  listPetsByOwner(OwnerId: string): Promise<Pet[] | Pet>
}
