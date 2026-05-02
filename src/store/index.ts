import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'

import { baseApi } from '@/api'

import { authSlice, preloadAuthState, authStorageMiddleware } from './auth'

export const makeStore = () => {
	return configureStore({
		reducer: {
			auth: authSlice.reducer,
			[baseApi.reducerPath]: baseApi.reducer,
		},
		preloadedState: {
			auth: preloadAuthState(),
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(baseApi.middleware, authStorageMiddleware),
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
