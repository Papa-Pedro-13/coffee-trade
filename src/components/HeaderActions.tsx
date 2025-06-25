import React from 'react'
import { FaUser } from 'react-icons/fa'

import { ROUTES } from '@/config/pages.config'

import { CartIcon } from './CartIcon'
import { IconButton } from './IconButton'
import { SearchBar } from './SearchBar'

export const HeaderActions = () => {
	return (
		<div className="flex gap-3">
			<SearchBar />
			<CartIcon />
			<IconButton href={ROUTES.PROFILE} Icon={FaUser} />
		</div>
	)
}
