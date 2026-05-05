import { tariffSchema } from '#shared/schemas/tariff'
import { prisma } from '../utils/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = tariffSchema.safeParse({
    ...body,
    price: Number(body.price)
  })

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: result.error.issues[0]?.message || 'Ошибка валидации'
    })
  }

  const tariff = await prisma.tariff.create({
    data: result.data
  })

  return {
    success: true,
    tariff
  }
})