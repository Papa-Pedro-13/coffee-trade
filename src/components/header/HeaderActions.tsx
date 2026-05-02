'use client'

import React from 'react'
import { FaUser, FaRegUser } from 'react-icons/fa'

import { ROUTES } from '@/config/pages.config'
import { useSession } from '@/hooks'

import { CartIcon } from '../other/CartIcon'
import { IconButton } from '../other/IconButton'
import { SearchBar } from '../other/SearchBar'

export const HeaderActions = () => {
	const { user } = useSession()

	return (
		<div className="flex gap-3">
			<SearchBar />
			<CartIcon />
			<IconButton href={user ? ROUTES.PROFILE : ROUTES.LOGIN} Icon={user ? FaUser : FaRegUser} />
		</div>
	)
}
