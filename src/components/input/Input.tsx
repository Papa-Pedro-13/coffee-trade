'use client'
import { ErrorMessage } from '@hookform/error-message'
import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: boolean
	errors?: Record<string, unknown>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, error, label, id, errors, name, ...props }, ref) => (
		<div>
			{label && (
				<label htmlFor={id} className="block text-sm font-medium text-secondary-text mb-2">
					{label}
				</label>
			)}
			<input
				ref={ref}
				id={id}
				name={name}
				className={`w-full px-4 py-3 border border-divider rounded-xl bg-background/50 text-foreground placeholder-secondary-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300
        ${error ? 'border-error focus:ring-error' : 'border-divider'}
        ${className}`}
				{...props}
			/>
			{errors && (
				<ErrorMessage
					errors={errors}
					name={name ?? ''}
					render={({ message }) => (
						<p className="text-[#bf1650] before:content-['⚠_'] before:inline">{message}</p>
					)}
				/>
			)}
		</div>
	),
)

Input.displayName = 'Input'
