module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env:{
        node: true
    },
    ignorePatterns: ['.eslintrc.mjs'],
    rules:{
        '@typescript-eslint/interface-name-prefix':'off',
        '@typescript-eslint/explicit-function-return-type':'off',
        '@typescript-eslint/explicit-module-boundary-types':'off',
        '@typescript-eslint/no-explicit-any':'off',
        'no-console':'off',
        '@typescript-eslint/no-var-requires':0,
        '@typescript-eslint/no-inferrable-types':'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            }
        ],
    },
    overrides: [
        {
            files: '*.mocks.ts',
            rules: {
                '@typescript-eslint/no-unused-vars': 'off',
            },
        }
    ]
}
