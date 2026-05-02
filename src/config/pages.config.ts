export const ROUTES = {
	MAIN: '/',
	CART: '/cart',
	LOGIN: '/login',
	PROFILE: '/profile',
	PRODUCT: (id: number) => `/products/${id}`,
} as const
