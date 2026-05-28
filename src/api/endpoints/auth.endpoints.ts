import { User } from '@/shared/types'
import { logout, setCredentials, setUser } from '@/store/auth'

import { baseApi } from '../base.api'

interface AuthResponse {
	accessToken: string
}

interface LoginRequest {
	email: string
	password: string
}

export const authApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getMe: builder.query<User, void>({
			query: () => '/auth/me',
			providesTags: ['User'],

			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled

					dispatch(setUser(data))
				} catch {
					dispatch(logout())
				}
			},
		}),
		login: builder.mutation<AuthResponse, LoginRequest>({
			query: credentials => ({
				url: '/auth/login',
				method: 'POST',
				body: credentials,
			}),
			invalidatesTags: ['User'],
			// Автоматически обновляем слайс после успешного входа
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					console.log(data)
					dispatch(setCredentials({ token: data.accessToken }))
				} catch {
					console.log('Ошибка авторизации')
				}
			},
		}),
		refresh: builder.mutation<AuthResponse, void>({
			query: () => ({
				url: '/auth/refresh',
				method: 'POST',
			}),

			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled

					dispatch(setCredentials({ token: data.accessToken }))
				} catch {
					dispatch(logout())
					console.log('Ошибка обновления токена')
				}
			},
		}),
		register: builder.mutation({
			query: newUser => ({
				url: '/auth/register',
				method: 'POST',
				body: newUser,
			}),
			invalidatesTags: ['User'],
		}),
	}),
})

export const { useLoginMutation, useRegisterMutation, useGetMeQuery, useRefreshMutation } = authApi
