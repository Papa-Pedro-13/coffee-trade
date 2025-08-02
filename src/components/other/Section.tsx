import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SectionProps {
	children?: ReactNode
	headingText?: string
	classNames?: string
}

export const Section = ({ children, headingText, classNames }: SectionProps) => {
	return (
		<div className={twMerge('', classNames)}>
			<div
				className={twMerge(
					'container mx-auto px-4 flex flex-col gap-6 lg:gap-12 my-8 md:my-10 lg:my-18 xl:my-22',
					classNames,
				)}
			>
				{headingText && (
					<h2 className="text-2xl md:text-4xl font-bold text-white">{headingText}</h2>
				)}
				{children}
			</div>
		</div>
	)
}
