import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const useApiError = () => {
	const getErrorMessage = (error: unknown, fallback = 'Произошла ошибка'): string => {
		if (error && typeof error === 'object' && 'status' in error) {
			const err = error as FetchBaseQueryError

			if (err.data && typeof err.data === 'object' && 'errors' in err.data) {
				const data = err.data as { errors?: Record<string, string[]> }
				if (data.errors) {
					return Object.values(data.errors).flat().join(', ')
				}
			}

			if (err.data && typeof err.data === 'object' && 'message' in err.data) {
				const data = err.data as { message?: string | string[] }
				return Array.isArray(data.message) ? data.message.join(', ') : data.message || fallback
			}

			if (err.status === 401) return 'Неверный email или пароль'
			if (err.status === 409) return 'Пользователь с таким email уже существует'
			if (err.status === 429) return 'Слишком много попыток, попробуйте позже'
			if (err.status && typeof err.status === 'number' && err.status >= 500) return 'Ошибка сервера'
		}

		if (error instanceof Error) return error.message
		return fallback
	}

	const getFieldError = (error: unknown, fieldName: string): string | undefined => {
		if (error && typeof error === 'object' && 'status' in error) {
			const err = error as FetchBaseQueryError
			if (err.data && typeof err.data === 'object' && 'errors' in err.data) {
				const data = err.data as { errors?: Record<string, string[]> }
				return data.errors?.[fieldName]?.[0]
			}
		}
		return undefined
	}

	return { getErrorMessage, getFieldError }
}
