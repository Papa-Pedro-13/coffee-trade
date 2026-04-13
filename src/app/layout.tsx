import { Inter } from 'next/font/google'

import { Header } from '@/components'

import StoreProvider from './storeProvider'

import type { Metadata, Viewport } from 'next'

import './globals.css'
import { Bounce, ToastContainer } from 'react-toastify'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Coffee Dynamo',
	description: 'Кофейня, где ценами управляешь ты!',
	icons: {
		icon: '/favicon.png',
	},
}

export const viewport: Viewport = {
	themeColor: '#ffffff',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru" className={inter.variable}>
			<body className="antialiased bg-gray-50 text-gray-900">
				<StoreProvider>
					<Header />
					<main className="min-h-screen">{children}</main>
					<ToastContainer
						position="bottom-center"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick={false}
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
						transition={Bounce}
					/>
				</StoreProvider>
			</body>
		</html>
	)
}
