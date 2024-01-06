module.exports = {

  env: {
      browser: true,
      es2021: true,
      jest: true,
  },

  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'airbnb',
      'airbnb/hooks',
      'prettier',
      'plugin:storybook/recommended',
  ],

  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
  },

  plugins: ['react'],

  rules: {
      // We have enabled the inplicit React import
      'react/react-in-jsx-scope': 0,
      // Specific rule for MUI to help support tree shaking without special plugins
      'no-restricted-imports': [
          'error',
          {
              paths: [
                  {
                      name: '@mui/material',
                      message: `To better support tree shaking, use "import [package] from '@mui/material/[package]'" instead.`,
                  },
              ],
              patterns: ['!@mui/material/table', '!@mui/material/test-utils/*'],
          },
      ],
      // Turn off airbnb rules that don't make much sense for react
      'no-restricted-exports': 0,
      'import/no-extraneous-dependencies': 0,
      'import/prefer-default-export': 0,
      'react/function-component-definition': 0,
      'react/jsx-props-no-spreading': 0,
      'react-hooks/exhaustive-deps': 0,
      'no-promise-executor-return': 0,
      'no-param-reassign': 0,
      'react/forbid-prop-types': 0,
      'react/no-array-index-key': 0,
  },
};

