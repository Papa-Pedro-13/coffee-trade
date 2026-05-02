'use client'

import { useEffect } from 'react'

import { authApi } from '@/api'
import { useAppSelector } from '@/store'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
	const [getUser] = authApi.useLazyGetMeQuery()

	const { isAuthenticated, user } = useAppSelector(state => state.auth)

	useEffect(() => {
		if (isAuthenticated && !user) getUser()
	}, [isAuthenticated])

	return <>{children}</>
}
