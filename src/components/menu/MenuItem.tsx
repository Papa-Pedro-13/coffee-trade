import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IMenuItemValue } from '@/shared/types'

interface IMenuItem {
	menuItem: IMenuItemValue
	isActive: boolean
	colors?: [string, string]
}

export const MenuItem = ({
	menuItem,
	isActive,
	colors = ['text-icons', 'text-light-primary'],
}: IMenuItem) => {
	const textColors = isActive ? colors[0] : colors[1]
	return (
		<Link
			href={menuItem.href}
			className={twMerge(
				`
				font-medium text-lg md:text-xl relative inline-block pb-1
  			after:content-[''] after:absolute after:bottom-0 after:left-0 
  			after:h-[2px] after:bg-white after:w-0
  			after:transition-all after:duration-300 after:ease-in-out
  			transition-all duration-300 ease-in-out
  			hover:after:w-full hover:${colors[0]}
				`,
				textColors,
			)}
		>
			{menuItem.text}
		</Link>
	)
}
