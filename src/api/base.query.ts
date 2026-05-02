import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { RootState } from '@/store'
import { logout, setCredentials } from '@/store/auth'

const baseQueryWithoutReauth = fetchBaseQuery({
	baseUrl: 'http://localhost:4000/api',
	timeout: 15000,
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token
		if (token) {
			headers.set('authorization', `Bearer ${token}`)
		}
		return headers
	},
})

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions,
) => {
	let result = await baseQueryWithoutReauth(args, api, extraOptions)

	if (result.error?.status === 401) {
		const refreshResult = await baseQueryWithoutReauth('/refresh', api, extraOptions)

		if (refreshResult.data) {
			const token = (refreshResult.data as { token: string }).token

			api.dispatch(setCredentials({ token }))

			result = await baseQueryWithoutReauth(args, api, extraOptions)
		} else {
			api.dispatch(logout())
		}
	}

	return result
}
