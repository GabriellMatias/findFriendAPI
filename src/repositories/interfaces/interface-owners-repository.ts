import { Owner, Prisma } from '@prisma/client'

export interface OwnersRepositoryProps {
  create(data: Prisma.OwnerCreateInput): Promise<Owner>
  searchOwnersById(ownerId: string): Promise<Owner | null>
  listOwnersByOrg(OrgId: string): Promise<Owner[] | Owner>
}
