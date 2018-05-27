module.exports = {
    env: {
        jest: true,
    },
    extends: ['standard', 'standard-react'],
    globals: {
        fetch: true,
        browser: true,
    },
    parser: 'babel-eslint',
    plugins: ['jest'],
    rules: {
        'arrow-body-style': 'warn',
        'comma-dangle': ['warn', 'only-multiline'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'warn',
        'jest/no-identical-title': 'error',
        'jest/valid-expect': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'linebreak-style': ['error', 'unix'],
        'max-len': [
            'error',
            120,
            {
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreUrls: true,
            },
        ],
        'no-nested-ternary': 'error',
        'no-var': 'error',
        'object-curly-spacing': ['error', 'always'],
        'operator-linebreak': 'off',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'react/display-name': [
            'error',
            {
                ignoreTranspilerName: true,
            },
        ],
        'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-handler-names': 'error',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-pascal-case': 'error',
        'react/jsx-sort-props': [
            'error',
            {
                ignoreCase: true,
            },
        ],
        'react/prefer-es6-class': 'error',
        'react/require-render-return': 'error',
        'require-await': 'error',
    },
}
