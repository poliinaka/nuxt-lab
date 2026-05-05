import { z } from 'zod'

export const requestSchema = z.object({
  name: z.string().min(2, 'Введите имя'),
  phone: z.string().min(5, 'Введите телефон'),
  email: z.string().email('Введите корректный email'),
  message: z.string().min(3, 'Введите сообщение')
})