import { PetsRepositoryProps } from '@/repositories/interfaces/interface-pets-repository'
import { Pet } from '@prisma/client'

interface SearchPetsUseCaseParams {
  query: string
  page: number
}

interface SearchPetsUseCaseResponse {
  pets: Pet[]
}

export class SearchPetsUseCase {
  constructor(private petsRepository: PetsRepositoryProps) {}

  async execute({
    page,
    query,
  }: SearchPetsUseCaseParams): Promise<SearchPetsUseCaseResponse> {
    const pets = await this.petsRepository.searchManyPets(query, page)
    return { pets }
  }
}
