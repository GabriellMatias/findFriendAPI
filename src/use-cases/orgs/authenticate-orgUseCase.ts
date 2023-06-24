import { OrgsRepositoryProps } from '@/repositories/interfaces/interface-orgs-repository'
import { Org } from '@prisma/client'
import { compare } from 'bcryptjs'
import { InvalidCredentiasError } from '../erros/invalid-credentials-erro'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  org: Org
}

export class AuthenticateUseCase {
  constructor(private orgsRepository: OrgsRepositoryProps) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const org = await this.orgsRepository.findByEmail(email)

    if (!org) {
      throw new InvalidCredentiasError()
    }
    const doesPasswordMatches = await compare(password, org.password_hash)
    if (!doesPasswordMatches) {
      throw new InvalidCredentiasError()
    }
    return { org }
  }
}
