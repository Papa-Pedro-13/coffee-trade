import Link from 'next/link'
import React from 'react'

import { Button } from '@/components'
import { ROUTES } from '@/config/pages.config'

const NotFound = () => {
	return (
		<div className="container mx-auto flex flex-col gap-10 justify-center items-center h-svh">
			<div className="text-4xl md:text-6xl lg:text-9xl font-black">404</div>

			<Link href={ROUTES.MAIN}>
				<Button variant="secondary">Вернуться на главную</Button>
			</Link>
		</div>
	)
}

export default NotFound
