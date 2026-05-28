import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '@/shared/types'

export interface AuthStore {
	user: User | null
	token: string | null
	isAuthenticated: boolean
	isLoading: boolean
}
export const initialAuthState: AuthStore = {
	token: null,
	user: null,
	isAuthenticated: false,
	isLoading: true,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		setCredentials: (
			state,
			{
				payload: { user, token, isAuthenticated },
			}: PayloadAction<{ user?: User | null; token: string; isAuthenticated?: boolean }>,
		) => {
			state.token = token
			if (user) state.user = user
			state.isAuthenticated = isAuthenticated ?? true
			state.isLoading = false
		},
		setUser: (state, { payload }: PayloadAction<User | null>) => {
			state.user = payload
			state.isLoading = false
		},
		logout: state => {
			state.token = null
			state.user = null
			state.isAuthenticated = false
			state.isLoading = false
		},
	},
})

export const { setCredentials, setUser, logout } = authSlice.actions
