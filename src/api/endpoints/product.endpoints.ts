import { ProductItem } from '@/shared/types'

type ProductServiceResponse = {
	data: ProductItem[] | null
	error?: string
	status: number
}

export async function fetchProducts(): Promise<ProductServiceResponse> {
	try {
		const res = await fetch('https://your-api.com/menu', {
			next: { revalidate: 3600 },
		})

		if (!res.ok) {
			return {
				data: null,
				error: `Ошибка ${res.status}: ${res.statusText}`,
				status: res.status,
			}
		}

		const data: ProductItem[] = await res.json()
		return { data, status: res.status }
	} catch (error) {
		return {
			data: null,
			error: error instanceof Error ? error.message : 'Неизвестная ошибка',
			status: 500,
		}
	}
}
