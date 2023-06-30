import { Prisma } from '@prisma/client'
import { OrgsRepositoryProps } from '../interfaces/interface-orgs-repository'
import { prisma } from '@/lib/prisma'

export class PrismaOrgsRepository implements OrgsRepositoryProps {
  async findByEmail(email: string) {
    const org = await prisma.org.findUnique({
      where: { email },
    })
    return org
  }

  async registerOrg(data: Prisma.OrgCreateInput) {
    const org = await prisma.org.create({
      data,
    })
    return org
  }

  async findById(id: string) {
    const org = await prisma.org.findUnique({
      where: { id },
    })
    return org
  }
}
