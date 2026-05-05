import { prisma } from '../../utils/prisma'

export default defineEventHandler(async () => {
  const count = await prisma.request.count()

  return {
    count
  }
})