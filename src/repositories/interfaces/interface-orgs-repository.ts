import { Org, Prisma } from '@prisma/client'

export interface OrgsRepositoryProps {
  create(data: Prisma.OrgCreateInput): Promise<Org>
  findById(id: string): Promise<Org | null>
}
