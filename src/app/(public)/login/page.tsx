'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { useLoginMutation } from '@/api/endpoints/auth.endpoints'
import { Input, Spinner } from '@/components'
import { Button } from '@/components/other/Button'
import { useApiError, useSession } from '@/hooks'
import { loginDefaults, loginSchema } from '@/schemas'

interface LoginForm {
	email: string
	password: string
}
export default function LoginPage() {
	const [isMounted, setIsMounted] = useState(false)
	const { isAuthenticated, isLoading: isLoadingState } = useSession()
	const [login, { isLoading }] = useLoginMutation()

	const { getErrorMessage, getFieldError } = useApiError()

	const searchParams = useSearchParams()
	const router = useRouter()

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<LoginForm>({
		resolver: zodResolver(loginSchema),
		mode: 'onBlur',
		defaultValues: loginDefaults,
	})

	const onSubmit = async (data: LoginForm) => {
		try {
			await login(data)

			toast.done('Вы вошли в аккаунт!')

			const redirect = searchParams.get('redirect') ?? '/'
			router.replace(redirect)
		} catch (error) {
			const message = getErrorMessage(error)

			const emailError = getFieldError(error, 'email')
			const passwordError = getFieldError(error, 'password')

			if (emailError) {
				setError('email', { type: 'server', message: emailError })
			} else if (passwordError) {
				setError('password', { type: 'server', message: passwordError })
			} else {
				toast.error(message)
			}
		}
	}

	console.log(isAuthenticated, isMounted, isLoadingState)
	useEffect(() => {
		if (isAuthenticated) {
			router.replace('/profile')
		} else {
			setIsMounted(true)
		}
	}, [isAuthenticated])

	if (!isMounted || isLoadingState)
		return (
			<div className="flex h-screen items-center justify-center">
				<Spinner />
			</div>
		)

	return (
		<div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 to-dark-primary/20">
			<div className="max-w-md w-full space-y-8 bg-light-primary/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-divider/50">
				<div>
					<h2 className="mt-6 text-center text-3xl font-bold text-primary-text">Вход в аккаунт</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
					<div className="space-y-4">
						<Input
							id="email"
							label="Email"
							placeholder="your@email.com"
							disabled={isLoading}
							errors={errors}
							{...register('email')}
						/>
						<Input
							id="password"
							label="Пароль"
							placeholder="••••••••"
							errors={errors}
							{...register('password')}
						/>
					</div>

					<Button
						type="submit"
						variant="primary"
						size="lg"
						fullWidth
						disabled={isLoading}
						className={isLoading ? 'opacity-75 cursor-not-allowed' : ''}
					>
						{isLoading ? 'Входим...' : 'Войти'}
					</Button>
				</form>
			</div>
		</div>
	)
}
