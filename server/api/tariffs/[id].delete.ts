import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Некорректный id'
    })
  }

  await prisma.tariff.delete({
    where: { id }
  })

  return {
    success: true
  }
})