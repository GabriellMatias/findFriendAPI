import { PetsRepositoryProps } from '@/repositories/interfaces/interface-pets-repository'
import { Pet } from '@prisma/client'

interface SearchPetsToAdoptedByCityUseCaseParams {
  city: string
}

interface SearchPetsToAdoptedByCityUseCaseResponse {
  pets: Pet[] | Pet
}

export class SearchPetsToAdoptedByCityUseCase {
  constructor(private petsRepository: PetsRepositoryProps) {}

  async execute({
    city,
  }: SearchPetsToAdoptedByCityUseCaseParams): Promise<SearchPetsToAdoptedByCityUseCaseResponse> {
    const pets = await this.petsRepository.listUnadoptedPetsByCity(city)
    return { pets }
  }
}
