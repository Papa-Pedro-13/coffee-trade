import { User } from '@/shared/types'
import { setCredentials } from '@/store/auth'

import { baseApi } from '../base.api'

interface AuthResponse {
	user: User
	token: string
}

interface LoginRequest {
	email: string
	password: string
}

export const authApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getMe: builder.query({
			query: () => '/auth/me',
		}),
		login: builder.mutation<AuthResponse, LoginRequest>({
			query: credentials => ({
				url: '/auth/login',
				method: 'POST',
				body: credentials,
			}),
			// Автоматически обновляем слайс после успешного входа
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					dispatch(setCredentials({ user: data.user, token: data.token }))
				} catch {
					console.log('Ошибка авторизации')
				}
			},
		}),
		register: builder.mutation({
			query: newUser => ({
				url: '/auth/register',
				method: 'POST',
				body: newUser,
			}),
		}),
	}),
})

export const { useLoginMutation, useRegisterMutation } = authApi
