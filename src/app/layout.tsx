import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { Header } from '@/components'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Coffe Dynamo',
	description: 'Кофейня, где ценами управляешь ты!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.png" sizes="any" />
			<body className={`${inter.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	)
}
