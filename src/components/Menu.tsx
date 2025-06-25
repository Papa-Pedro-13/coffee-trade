'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

import { MENU } from '@/constants'

import { MenuItem } from './MenuItem'

export const Menu = () => {
	const pathname = usePathname()

	return (
		<div className="flex gap-3">
			{MENU.map(menuItem => (
				<MenuItem key={menuItem.href} menuItem={menuItem} isActive={pathname === menuItem.href} />
			))}
		</div>
	)
}
