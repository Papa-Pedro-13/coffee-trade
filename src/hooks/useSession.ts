import { useAppSelector } from '@/store'

export const useSession = () => {
	const authState = useAppSelector(state => state.auth)

	return authState
}
