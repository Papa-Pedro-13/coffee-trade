import * as z from 'zod'

export const loginSchema = z.object({
	email: z.email('Введенное значение не соответствует формату почты').trim(),
	password: z.string().min(8, 'Пароль должен содержать минимум 8 символов'),
})

export const loginDefaults = {
	email: '',
	password: '',
}
