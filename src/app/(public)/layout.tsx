import { PropsWithChildren } from 'react'

import { Header } from '@/components/Header'

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}
