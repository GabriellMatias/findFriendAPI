import { Owner, Prisma } from '@prisma/client'

export interface OwnersRepositoryProps {
  create(data: Prisma.OwnerCreateInput): Promise<Owner>
  listOwnersByOrg(OrgId: string): Promise<Owner[] | Owner>
}
