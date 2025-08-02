export const ROUTES = {
	MAIN: '/',
	CART: '/cart',
	PROFILE: '/profile',
	PRODUCT: (id: number) => `/products/${id}`,
} as const
