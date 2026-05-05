import { z } from 'zod'

export const tariffSchema = z.object({
  title: z.string().min(2, 'Введите название тарифа'),
  price: z.number().min(1, 'Введите цену'),
  description: z.string().min(3, 'Введите описание')
})