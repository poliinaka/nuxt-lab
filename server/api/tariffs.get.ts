import { prisma } from '../utils/prisma'

export default defineEventHandler(async () => {
  return await prisma.tariff.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
})