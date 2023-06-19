import { PrismaClient } from '@prisma/client';
import { env } from '@/env'


export const prisma = new PrismaClient({
  /* Loga os comandos que ele esta fazendo em SQL */
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})
