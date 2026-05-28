import { ProductItem } from '@/shared/types'

import { baseApi } from '../base.api'

type ProductServiceResponse = {
	data: ProductItem[] | null
	error?: string
	status: number
}

export const productApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getList: builder.query<ProductItem[], void>({
			query: () => '/products',
			providesTags: ['Product'],
		}),
	}),
})
