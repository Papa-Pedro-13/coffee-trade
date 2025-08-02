import Link from 'next/link'

interface ErrorBlockProps {
	message: string
	error?: string
	retryLink?: string
}

export function ErrorBlock({ message, error, retryLink }: ErrorBlockProps) {
	return (
		<div className="bg-red-50 border-l-4 border-red-500 p-4">
			<div className="flex items-center">
				<div className="ml-3">
					<p className="text-sm font-medium text-red-800">{message}</p>
					{error && <p className="mt-2 text-sm text-red-700">{error}</p>}
					{retryLink && (
						<Link
							href={retryLink}
							className="mt-3 inline-flex items-center text-sm font-medium text-red-700 hover:text-red-600"
						>
							Попробовать снова →
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
