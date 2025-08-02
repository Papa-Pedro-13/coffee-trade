'use client'
import React, { useState, useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

import { Button } from '../other/Button'

import { Menu } from './Menu'

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	// Блокировка скролла при открытом меню
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		// Очистка при размонтировании
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	// Закрытие меню при нажатии Escape
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsOpen(false)
		}

		window.addEventListener('keydown', handleEscape)
		return () => window.removeEventListener('keydown', handleEscape)
	}, [])

	const toggleMenu = () => setIsOpen(!isOpen)
	const closeMenu = () => setIsOpen(false)

	return (
		<>
			{/* Бургер-кнопка */}
			<button
				onClick={toggleMenu}
				className="md:hidden p-1.5 rounded-full text-primary bg-light-primary hover:bg-divider transition-colors"
				aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
				aria-expanded={isOpen}
			>
				<FaBars className="w-4 h-4" />
			</button>

			{/* Затемнение фона */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-dark-primary opacity-90 z-40 md:hidden"
					onClick={closeMenu}
					aria-hidden="true"
				/>
			)}

			<div
				className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-light-primary shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				{/* Шапка меню */}
				<div className="flex justify-between items-center p-4 border-b border-divider">
					<div className="text-xl font-bold text-primary-text">Меню</div>
					<button
						onClick={closeMenu}
						className="p-2 rounded-full text-primary hover:text-dark-primary"
						aria-label="Закрыть меню"
					>
						<FaTimes className="w-6 h-6" />
					</button>
				</div>

				{/* Навигация */}
				<nav className="overflow-y-auto h-[calc(100%-64px)]">
					<div className="p-4">
						<Menu vertical design="secondary" />
					</div>

					{/* Дополнительная информация */}
					<div className="p-4 border-t border-divider">
						<div className="mb-4">
							<h3 className="font-semibold text-primary-text">Контакты</h3>
							<p className="text-secondary-text mt-1">+7 (999) 123-45-67</p>
							<p className="text-secondary-text">Москва, ул. Кофейная, 15</p>
						</div>

						<div className="flex space-x-2">
							<Button variant="primary" size="md" fullWidth className="mt-4">
								Забронировать
							</Button>
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}
