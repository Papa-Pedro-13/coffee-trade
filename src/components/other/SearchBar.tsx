'use client'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import { IconButton } from './IconButton'

export const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [isExpanded, setIsExpanded] = useState(false)

	const handleSearch = () => {
		console.log('Search for:', searchTerm)
		//TODO: Здесь будет реализация поиска
	}

	const handleClear = () => {
		setSearchTerm('')
		setIsExpanded(false)
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && searchTerm.trim()) {
			handleSearch()
		} else if (e.key === 'Escape') {
			handleClear()
		}
	}

	return (
		<div className="relative flex items-center">
			{isExpanded && (
				<input
					type="text"
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					onKeyDown={handleKeyPress}
					placeholder="Поиск напитков..."
					className="text-sm pl-4 pr-10 py-1 sm:py-[7px] rounded-full bg-light-primary border border-divider shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 w-full sm:w-64 text-primary-text"
					autoFocus
				/>
			)}

			<IconButton
				onClick={() => (isExpanded ? handleSearch() : setIsExpanded(true))}
				aria-label={isExpanded ? 'Выполнить поиск' : 'Открыть поиск'}
				className={`${isExpanded ? 'absolute right-0 ' : ' hover:bg-divider'} cursor-pointer `}
				Icon={FaSearch}
			/>
		</div>
	)
}
