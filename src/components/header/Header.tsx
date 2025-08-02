import Image from 'next/image'
import Link from 'next/link'

import { Menu } from '../menu/Menu'
import { MobileMenu } from '../menu/MobileMenu'

import { HeaderActions } from './HeaderActions'

export const Header = () => {
	return (
		<header className="border-b border-divider">
			<div className="container mx-auto px-4 py-1 justify-between flex items-center">
				<Link href="/">
					<Image src="/logo.png" alt="Логотип" width={40} height={40} className="md:w-12" />
				</Link>
				<div className="hidden sm:block">
					<Menu design="primary" />
				</div>
				<div className="flex gap-3">
					<HeaderActions />
					<MobileMenu />
				</div>
			</div>
		</header>
	)
}
