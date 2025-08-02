'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { Button, Section } from '@/components'

export function HeroBlock() {
	const [isSecondColor, setIsSecondColor] = useState(false)
	useEffect(() => {
		const interval = setInterval(() => {
			setIsSecondColor(prev => !prev)
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<>
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-dark-primary to-primary text-icons">
				<Section classNames="my-0 lg:my-0 xl:my-0 md:my-0">
					<div className="py-24 md:py-32 flex flex-col md:flex-row items-center gap-8">
						<div className="md:w-1/2 space-y-6 z-10">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
								Наслаждайтесь идеальным кофе с
								<span
									className={twMerge(
										'transition-all duration-500  ease-in-out',
										isSecondColor ? 'text-green' : 'text-red',
									)}
								>
									{' '}
									динамическими{' '}
								</span>
								ценами
							</h1>
							<p className="text-lg md:text-xl max-w-2xl text-light-primary">
								Откройте для себя уникальные кофейные напитки по ценам, которые меняются в
								зависимости от спроса. Чем популярнее напиток, тем выгоднее его попробовать!
							</p>
							<div className="flex flex-col sm:flex-row gap-4 mt-8">
								<Button variant="secondary" size="lg">
									Посмотреть меню
								</Button>
								<Button
									variant="outline-second"
									size="lg"
									className="bg-transparent border-icons text-icons hover:bg-light-primary/10"
								>
									Как это работает?
								</Button>
							</div>
						</div>

						<div className="md:w-1/2 flex justify-center z-10">
							<div className="relative w-full max-w-md">
								<div className="absolute -top-6 -right-6 w-full h-full rounded-full bg-light-primary/20"></div>
								<div className="relative rounded-full overflow-hidden border-4 border-icons shadow-xl bg-dark-primary">
									<Image
										src="/cupOfCoffee.png"
										alt="Кофейные напитки"
										width={500}
										height={500}
										className="w-full h-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</Section>

				{/* Decorative elements */}
				<div className="absolute bottom-0 left-0 w-full overflow-hidden">
					<svg
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
						className="fill-light-primary opacity-10"
					>
						<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
					</svg>
				</div>
			</section>
		</>
	)
}
