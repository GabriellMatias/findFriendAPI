import { OwnersRepositoryProps } from '@/repositories/interfaces/interface-owners-repository'
import { Owner } from '@prisma/client'
import { ResourceNotFoundError } from '../erros/resource-not-found-erro'

interface CreateOwnerUseCaseRequest {
  name: string
}

interface CreateOwnerUseCaseResponse {
  owner: Owner
}

export class CreateOwnerUseCase {
  constructor(private ownerRepository: OwnersRepositoryProps) {}

  async execute({
    name,
  }: CreateOwnerUseCaseRequest): Promise<CreateOwnerUseCaseResponse> {
    const owner = await this.ownerRepository.create({ name })

    if (!owner) {
      throw new ResourceNotFoundError()
    }

    return { owner }
  }
}
