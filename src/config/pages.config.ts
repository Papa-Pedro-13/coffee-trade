export const ROUTES = {
	MAIN: '/',
	CART: '/cart',
	PROFILE: '/profile',
	PRODUCT: (id: string) => `/products/${id}`,
} as const
