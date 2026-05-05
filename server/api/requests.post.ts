import { requestSchema } from '#shared/schemas/request'
import { prisma } from '../utils/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = requestSchema.safeParse(body)

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: result.error.issues[0]?.message || 'Ошибка валидации'
    })
  }

  const request = await prisma.request.create({
    data: result.data
  })

  return {
    success: true,
    request
  }
})