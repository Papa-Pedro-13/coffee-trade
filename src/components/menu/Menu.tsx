'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

import { MENU } from '@/constants'

import { MenuItem } from './MenuItem'

interface MenuProps {
	vertical?: boolean
	design: 'primary' | 'secondary'
}

export const Menu = ({ vertical, design }: MenuProps) => {
	const pathname = usePathname()

	const colors: [string, string] | undefined =
		design === 'secondary' ? ['text-dark-primary', 'text-secondary-text'] : undefined

	return (
		<div className={`flex gap-3 md:gap-5 lg:gap-9 ${!vertical || 'flex-col'}`}>
			{MENU.map(menuItem => (
				<MenuItem
					key={menuItem.href}
					menuItem={menuItem}
					isActive={pathname === menuItem.href}
					colors={colors}
				/>
			))}
		</div>
	)
}
