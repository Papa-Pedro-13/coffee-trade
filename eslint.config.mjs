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
		'plugin:import/typescript',
	),
	{
		rules: {
			// Сортировка импортов
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
						'object',
						'type',
					],
					pathGroups: [
						{
							pattern: '@//**',
							group: 'internal',
							position: 'before',
						},
						{
							pattern: './**/*.{css,scss,less}',
							group: 'index',
							position: 'after',
						},
						{
							pattern: '**/*.{css,scss,less}',
							group: 'index',
							position: 'after',
						},
					],
					pathGroupsExcludedImportTypes: ['type'],
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
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
				},
			},
		},
	},
]

export default eslintConfig
