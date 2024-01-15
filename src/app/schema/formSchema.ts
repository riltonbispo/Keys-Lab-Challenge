import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email().min(1, { message: 'Campo obrigatorio' }),
  password: z.string().min(1, { message: 'Campo obrigatorio' }),
})