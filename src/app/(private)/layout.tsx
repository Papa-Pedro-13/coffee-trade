'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useRefreshMutation } from '@/api'
import { Spinner } from '@/components'
import { useAppDispatch, useAppSelector } from '@/store'
import { logout, setCredentials } from '@/store/auth'

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
	const [refresh] = useRefreshMutation()
	const { isAuthenticated, token: accessToken } = useAppSelector(store => store.auth)
	const dispatch = useAppDispatch()
	const router = useRouter()
	const pathname = usePathname()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		let mounted = true

		const checkAuth = async () => {
			const token = accessToken || sessionStorage.getItem('accessToken')

			if (!token || !isAuthenticated) {
				try {
					const { accessToken: newToken } = await refresh().unwrap()
					if (mounted) {
						dispatch(setCredentials({ token: newToken, isAuthenticated: true }))
					}
				} catch {
					if (mounted) {
						dispatch(logout())
						router.replace(`/login?redirect=${encodeURIComponent(pathname)}`)
					}
					return
				}
			}

			if (mounted) setIsLoading(false)
		}

		checkAuth()
		return () => {
			mounted = false
		}
	}, [isAuthenticated, accessToken, dispatch, router, pathname, refresh])

	if (isLoading) {
		return (
			<div className="flex h-screen items-center justify-center">
				<Spinner />
			</div>
		)
	}

	return <>{children}</>
}
