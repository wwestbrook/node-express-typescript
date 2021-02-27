module.exports = {
	root: true,
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts']
			}
		}
	},
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		// DISABLE ESLINT RULES WITH ACCOMPANYING TYPESCRIPT RULES
		// you must disable the base rule as it can report incorrect errors
		'brace-style': 'off',
		camelcase: 'off',
		'comma-dangle': 'off',
		'keyword-spacing': 'off',
		'no-extra-parens': 'off',
		'no-shadow': 'off',
		'no-unused-vars': 'off',
		'object-curly-spacing': 'off',
		quotes: 'off',
		semi: 'off',
		'space-infix-ops': 'off',

		// ECMA Script 6 Features
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				requireReturnForObjectLiteral: false
			}
		],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': ['error', { before: true, after: true }],

		// TYPESCRIPT RULES
		eqeqeq: ['error', 'always', { null: 'ignore' }],
		'no-alert': 'warn',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
		'@typescript-eslint/no-extra-parens': ['error'],
		'@typescript-eslint/no-misused-promises': ['error'],
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/semi': ['error'],
		'@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],

		// STYLE OPTIONS
		'array-bracket-newline': ['off', 'consistent'],
		'array-element-newline': ['off', { multiline: true, minItems: 3 }],
		'array-bracket-spacing': ['error', 'never'],
		'eol-last': ['error', 'always'],
		'linebreak-style': ['error', 'windows'],
		'max-len': ['error', { code: 120, tabWidth: 2 }],
		'no-lonely-if': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
			},
			{
				selector: 'ForOfStatement',
				message:
					'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
			}
		],
		'no-trailing-spaces': [
			'error',
			{
				skipBlankLines: false,
				ignoreComments: false
			}
		],
		'prefer-template': 'error',
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true
			}
		],
		'prefer-object-spread': 'error',
		'rest-spread-spacing': ['error', 'never'],
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					exceptions: ['-', '+'],
					markers: ['=', '!', '/'] // space here to support sprockets directives, slash for TS /// comments
				},
				block: {
					exceptions: ['-', '+'],
					markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
					balanced: true
				}
			}
		],
		'@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'@typescript-eslint/comma-dangle': ['error'],
		'@typescript-eslint/keyword-spacing': ['error'],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase']
			},

			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE']
			},
			{
				selector: 'parameter',
				format: ['camelCase'],
				leadingUnderscore: 'allow'
			},

			{
				selector: 'memberLike',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},

			{
				selector: 'typeLike',
				format: ['PascalCase']
			}
		],
		'@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
		'@typescript-eslint/object-curly-spacing': ['error', 'always', { arraysInObjects: false }],

		// IMPORTS
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: false
			}
		]
		// 'max-len': ['error', { 'code': 120, 'tabWidth': 2 }],
		// 'class-methods-use-this': ['error', 'never'],
		// 'lines-between-class-members': ['error', 'never'],

		// 'indent': ['error', 'tab'],

		// 'no-useless-constructor': 'off',
		// '@typescript-eslint/no-useless-constructor': ['error'],
	}
};
