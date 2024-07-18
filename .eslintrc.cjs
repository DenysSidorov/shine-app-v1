module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // 'eslint:recommended',
    'plugin:react/recommended',
    // 'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 'prettier/prettier': 'error',
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    'prettier/prettier': ['error', { printWidth: 120 }],
    'max-len': ["error", { "code": 120 }]
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
