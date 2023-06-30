import { FastifyInstance } from 'fastify'
import { authenticate } from './authenticate-org'
import { VerifyJwt } from '@/http/middlewares/VerifyJwt'
import { profile } from '../Owners/profile'
import { registerPetOnOrg } from './register-pet-on-org'

export async function orgsRoutes(app: FastifyInstance) {
  app.post('/sessions', authenticate)

  // Rotas que serao chamadas apenas com auth
  app.get('/onwerProfile', { onRequest: [VerifyJwt] }, profile)
  app.post('/createPet', { onRequest: [VerifyJwt] }, registerPetOnOrg)
}
