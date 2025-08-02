'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

import { ROUTES } from '@/config/pages.config'

import { IconButton } from './IconButton'

export const CartIcon = () => {
	const [isHovered, setIsHovered] = useState(false)
	// Заглушка данных корзины
	const cartItems = [
		{ id: 1, name: 'Капучино', price: 120, quantity: 2 },
		{ id: 2, name: 'Эспрессо', price: 80, quantity: 1 },
	]

	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
	const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

	return (
		<div className="relative">
			<IconButton
				href={ROUTES.CART}
				aria-label="Корзина покупок"
				Icon={FaShoppingCart}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{totalItems > 0 && (
					<span className="absolute -top-1.5 -right-1 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-dark-primary text-icons text-xs font-bold">
						{totalItems}
					</span>
				)}
			</IconButton>

			{isHovered && totalItems > 0 && (
				<div
					className="absolute hidden md:block right-0 mt-2 w-80 bg-light-primary rounded-lg shadow-xl z-50 border border-divider"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<div className="p-4">
						<h3 className="font-semibold text-primary-text mb-3">Ваша корзина</h3>

						<div className="max-h-60 overflow-y-auto">
							{cartItems.map(item => (
								<div key={item.id} className="flex justify-between py-2 border-b border-divider">
									<div className="flex-1 truncate pr-2">
										<span className="font-medium text-primary-text">{item.name}</span>
										<span className="text-secondary-text ml-2">×{item.quantity}</span>
									</div>
									<div className="font-medium text-primary-text">
										{item.price * item.quantity} ₽
									</div>
								</div>
							))}
						</div>

						<div className="flex justify-between items-center mt-4 pt-4 border-t border-divider">
							<span className="font-semibold text-primary-text">Итого:</span>
							<span className="font-bold text-lg text-primary-text">{totalPrice} ₽</span>
						</div>

						<Link
							href={ROUTES.CART}
							className="mt-4 block w-full py-2 px-4 text-center bg-primary hover:bg-dark-primary text-icons rounded-lg transition-colors"
						>
							Перейти к оплате
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}
