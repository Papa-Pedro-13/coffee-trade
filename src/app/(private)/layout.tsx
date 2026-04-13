// app/(private)/layout.tsx
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
	const cookieStore = await cookies()
	const token = cookieStore.get('token')

	// Если токена нет в куках, редиректим на логин
	if (!token) {
		redirect('/login')
	}

	return <>{children}</>
}
