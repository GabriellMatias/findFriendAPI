import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { petsRoutes } from './http/controllers/Pets/routes'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()

/* Registrando cookie para passar JWT por ele */
app.register(fastifyCookie)

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    /* Cookie do refreshToken nao e assinado */
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

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
