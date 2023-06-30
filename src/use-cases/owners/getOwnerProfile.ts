import { OwnersRepositoryProps } from '@/repositories/interfaces/interface-owners-repository'
import { Owner } from '@prisma/client'
import { ResourceNotFoundError } from '../erros/resource-not-found-erro'

interface GetOwnerProfileUseCaseRequest {
  ownerId: string
}

interface GetOwnerProfileUseCaseResponse {
  owner: Owner
}

export class GetOwnerProfileUseCase {
  constructor(private ownerRepository: OwnersRepositoryProps) {}

  async execute({
    ownerId,
  }: GetOwnerProfileUseCaseRequest): Promise<GetOwnerProfileUseCaseResponse> {
    const owner = await this.ownerRepository.searchOwnersById(ownerId)

    if (!owner) {
      throw new ResourceNotFoundError()
    }

    return { owner }
  }
}
