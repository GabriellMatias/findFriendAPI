import { Prisma, Org } from '@prisma/client'
import { OrgsRepositoryProps } from '../interfaces/interface-orgs-repository'
import { prisma } from '@/lib/prisma'

export class PrismaOrgsRepository implements OrgsRepositoryProps {
  findByEmail(email: string): Promise<Org | null> {
    const org = prisma.org.findUnique({
      where: { email },
    })
    return org
  }

  registerOrg(data: Prisma.OrgCreateInput): Promise<Org> {
    const org = prisma.org.create({
      data,
    })
    return org
  }

  findById(id: string): Promise<Org | null> {
    throw new Error('Method not implemented.')
  }
}
