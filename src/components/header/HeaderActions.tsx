import React from 'react'
import { FaUser } from 'react-icons/fa'

import { ROUTES } from '@/config/pages.config'

import { CartIcon } from '../other/CartIcon'
import { IconButton } from '../other/IconButton'
import { SearchBar } from '../other/SearchBar'

export const HeaderActions = () => {
	return (
		<div className="flex gap-3">
			<SearchBar />
			<CartIcon />
			<IconButton href={ROUTES.PROFILE} Icon={FaUser} />
		</div>
	)
}
