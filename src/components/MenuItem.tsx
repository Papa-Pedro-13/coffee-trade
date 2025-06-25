import Link from 'next/link'
import React from 'react'

import { IMenuItemValue } from '@/shared/types'

interface IMenuItem {
	menuItem: IMenuItemValue
	isActive: boolean
}

export const MenuItem = ({ menuItem, isActive }: IMenuItem) => {
	return (
		<Link href={menuItem.href} className={isActive ? 'text-icons' : 'text-light-primary'}>
			{menuItem.text}
		</Link>
	)
}
