module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'sort-imports': ['off'],
    'import/order': ['off'],
    'simple-import-sort/imports': ['error'],
    'simple-import-sort/exports': ['error']
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineComponent: 'readonly',
    defineExpose: 'readonly'
  }
}
