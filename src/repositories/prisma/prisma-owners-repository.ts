import { Prisma } from '@prisma/client'
import { OwnersRepositoryProps } from '../interfaces/interface-owners-repository'
import { prisma } from '@/lib/prisma'

export class PrismaOwnersRepository implements OwnersRepositoryProps {
  create(data: Prisma.OwnerCreateInput) {
    const owner = prisma.owner.create({
      data,
    })
    return owner
  }

  async searchOwnersById(ownerId: string) {
    const owner = await prisma.owner.findUnique({
      where: {
        id: ownerId,
      },
    })
    return owner
  }

  async listOwnersByOrg(OrgId: string) {
    const owners = await prisma.owner.findMany({
      where: {
        org_id: OrgId,
      },
    })
    return owners
  }
}
