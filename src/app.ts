import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { petsRoutes } from './http/controllers/Pets/routes'

export const app = fastify()

app.register(petsRoutes)

/* Treat errors */
app.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'validation Erro', issues: error.format })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO -> Log to external tool like DataDog
  }

  return reply.status(500).send({ message: 'Internal server error' })
})
