import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '@/shared/types'

interface AuthStore {
	user: User | null
	token: string | null
	isAuthenticated: boolean
}
const initialState: AuthStore = {
	token: null,
	user: null,
	isAuthenticated: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (
			state,
			{ payload: { user, token } }: PayloadAction<{ user: User | null; token: string }>,
		) => {
			state.token = token
			state.user = user
			state.isAuthenticated = true
		},
		logout: state => {
			state.token = null
			state.user = null
			state.isAuthenticated = false
		},
	},
})

export const { setCredentials, logout } = authSlice.actions
