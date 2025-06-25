import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, ForwardedRef } from 'react'
import { IconType } from 'react-icons'

interface BaseIconButtonProps {
	Icon: IconType
	children?: ReactNode
	className?: string
}

type LinkButtonProps = BaseIconButtonProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> & {
		href: Url
	}

type ButtonOnlyProps = BaseIconButtonProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
		href?: never
	}

type IconButtonProps = LinkButtonProps | ButtonOnlyProps

export const IconButton = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, IconButtonProps>(
	({ Icon, className = '', children, ...restProps }, ref) => {
		const combinedClasses = `p-1.5 sm:p-2 rounded-full text-primary bg-light-primary hover:bg-divider hover:text-dark-primary transition-colors duration-300 block ${className}`

		// Если есть href - рендерим как ссылку
		if ('href' in restProps && restProps.href !== undefined) {
			const { href, ...linkProps } = restProps as LinkButtonProps

			return (
				<Link
					ref={ref as ForwardedRef<HTMLAnchorElement>}
					href={href}
					{...linkProps}
					className={combinedClasses}
				>
					<Icon className="w-4 h-4 sm:w-5 sm:h-5" />
					{children}
				</Link>
			)
		}

		// Если нет href - рендерим как кнопку
		return (
			<button
				ref={ref as ForwardedRef<HTMLButtonElement>}
				{...(restProps as ButtonOnlyProps)}
				className={combinedClasses}
			>
				<Icon className="w-4 h-4 sm:w-5 sm:h-5" />
				{children}
			</button>
		)
	},
)

IconButton.displayName = 'IconButton'
