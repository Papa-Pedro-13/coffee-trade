import { Middleware } from '@reduxjs/toolkit'

import { AuthStore, initialAuthState } from './auth.slice'

export const authStorageMiddleware: Middleware<Record<string, string>> =
	storeApi => next => action => {
		const result = next(action)

		const state = storeApi.getState()

		sessionStorage.setItem('authToken', JSON.stringify(state.auth.token))

		return result
	}

export const preloadAuthState = (): AuthStore => {
	try {
		const token = sessionStorage.getItem('authToken')
		if (!token || token === 'null') return { ...initialAuthState, isLoading: false }

		return {
			...initialAuthState,
			isAuthenticated: true,
			token: JSON.parse(token),
			isLoading: false,
		} as AuthStore
	} catch {
		return { ...initialAuthState, isLoading: false }
	}
}
