import Link, { LinkProps } from 'next/link'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-second'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
	variant?: ButtonVariant
	size?: ButtonSize
	fullWidth?: boolean
	children: ReactNode
	className?: string
}

type ButtonAsButton = BaseButtonProps &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		as?: 'button'
	}

type ButtonAsLink = BaseButtonProps &
	LinkProps & {
		as: 'link'
	}

export type ButtonProps = ButtonAsButton | ButtonAsLink

export const Button = (props: ButtonProps) => {
	const {
		variant = 'primary',
		size = 'md',
		fullWidth = false,
		children,
		className = '',
		...rest
	} = props

	// Базовые классы для всех кнопок
	const baseClasses =
		'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer'

	// Классы для вариантов
	const variantClasses = {
		primary: 'bg-primary text-icons hover:bg-dark-primary',
		secondary:
			'border border-primary hover:border-light-primary hover:text-light-primary bg-light-primary text-primary hover:bg-dark-primary',
		outline: 'border border-primary text-primary hover:bg-light-primary',
		'outline-second':
			'border border-icons text-icons hover:border-light-primary hover:text-light-primary',
	}[variant]

	// Классы для размеров
	const sizeClasses = {
		sm: 'py-1 px-3 text-sm',
		md: 'py-2 px-4',
		lg: 'py-3 px-6 text-lg',
	}[size]

	const fullWidthClass = fullWidth ? 'w-full' : ''

	const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${fullWidthClass} ${className}`

	if (props.as === 'link') {
		const { ...linkProps } = rest as ButtonAsLink
		return (
			<Link {...linkProps} className={combinedClasses}>
				{children}
			</Link>
		)
	}

	const { ...buttonProps } = rest as ButtonAsButton
	return (
		<button type="button" className={combinedClasses} {...buttonProps}>
			{children}
		</button>
	)
}
