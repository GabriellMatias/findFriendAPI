import { OrgsRepositoryProps } from '@/repositories/interfaces/interface-orgs-repository'
import { Org } from '@prisma/client'
import { hash } from 'bcryptjs'

interface RegisterOrgUseCaseParams {
  name: string
  adress: string
  phone: number
  email: string
  password: string
}

interface RegisterOrgUseCaseResponse {
  org: Org
}

export class RegisterOrgUseCase {
  constructor(private orgsRepository: OrgsRepositoryProps) {}

  async execute({
    adress,
    email,
    name,
    password,
    phone,
  }: RegisterOrgUseCaseParams): Promise<RegisterOrgUseCaseResponse> {
    const password_hash = await hash(password, 6)

    const org = await this.orgsRepository.registerOrg({
      address: adress,
      email,
      name,
      phone,
      password_hash,
    })
    return { org }
  }
}
