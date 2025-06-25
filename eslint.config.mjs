import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends(
		'next/core-web-vitals',
		'next/typescript',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
	),
	{
		rules: {
			// Сортировка импортов
			'import/order': [
				'error',
				{
					groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],

			semi: 'off',
			quotes: 'off',
			indent: 'off',
			'comma-dangle': 'off',
			'max-len': 'off',
			'arrow-parens': 'off',

			'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
		},
	},
]

export default eslintConfig
