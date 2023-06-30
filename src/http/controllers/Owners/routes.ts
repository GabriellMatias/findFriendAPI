import { VerifyJwt } from '@/http/middlewares/VerifyJwt'
import { FastifyInstance } from 'fastify'
import { createOwner } from './create'

export async function ownersRoutes(app: FastifyInstance) {
  app.post('/register', { onRequest: [VerifyJwt] }, createOwner)
}
