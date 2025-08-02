import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from '../other/Button'

interface ProductCardProps {
	name: string
	price: string
	image: string
	href: string
}

export const ProductCard = ({ name, price, image, href }: ProductCardProps) => {
	return (
		<div
			// href={href}
			className="border rounded-lg hover:shadow-md transition-shadow overflow-hidden flex flex-col"
		>
			<Image alt={name} src={image} width={300} height={200} className="w-full h-auto" />

			<div className="p-4 flex flex-col gap-2 mt-auto">
				<div className="flex gap-3 justify-between items-end min-[420px]:flex-col min-[520px]:flex-row">
					<h3 className="text-xl font-bold">{name}</h3>
					<div className="text-lg font-semibold whitespace-nowrap">
						{price ? `${price} ₽` : 'Загрузка...'}
					</div>
				</div>
				<Button
					fullWidth
					variant="secondary"
					// onClick={() => updateDemand(id)}
				>
					Добавить в корзину
				</Button>
			</div>
		</div>
	)
}
