module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  /* extends: ['plugin:react/recommended', 'standard-with-typescript'], */
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  /* plugins: ['react'], */
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/consistent-type-definitions': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
  }
}
