import React from 'react'

import { ROUTES } from '@/config/pages.config'
import { mockProducts } from '@/constants/product.data'
import { ProductItem } from '@/shared/types'

import { ProductCard } from '../product-card/ProductCard'

interface ProductListProps {
	products: ProductItem[]
}

export const ProductList = ({ products = mockProducts }: ProductListProps) => {
	return (
		<div className="gap-5 grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
			{products.map(product => (
				<ProductCard key={product.id} {...product} href={ROUTES.PRODUCT(product.id)} />
			))}
		</div>
	)
}
