import { PetsRepositoryProps } from '@/repositories/interfaces/interface-pets-repository'
import { Pet } from '@prisma/client'

interface CreatePetUseCaseParams {
  name: string
  city: string
  isAdopted: boolean
  orgId: string
}

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(private petsRepository: PetsRepositoryProps) {}

  async execute({
    city,
    isAdopted,
    name,
    orgId,
  }: CreatePetUseCaseParams): Promise<CreatePetUseCaseResponse> {
    const pet = await this.petsRepository.create({
      city,
      name,
      is_adopted: isAdopted,
      org: { connect: { id: orgId } },
    })
    return { pet }
  }
}
