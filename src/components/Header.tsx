import Image from 'next/image'
import Link from 'next/link'

import { HeaderActions } from './HeaderActions'
import { Menu } from './Menu'

export const Header = () => {
	return (
		<header className="border-b border-divider">
			<div className="container mx-auto px-4 py-1 justify-between flex items-center">
				<Link href="/">
					<Image src="/logo.png" alt="Логотип" width={40} height={40} />
				</Link>
				<Menu />
				<HeaderActions />
			</div>
		</header>
	)
}
