module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier/@typescript-eslint', // Prettier와 충돌하는 ESLint 규칙 비활성화
    'plugin:prettier/recommended', // Prettier 규칙 추가
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    indent: ['error', 2], // 들여쓰기 2칸
    semi: ['error', 'always'], // 세미콜론 항상 사용
    quotes: ['error', 'single'], // 문자열은 따옴표로
    'no-unused-vars': 'warn', // 사용안한 변수는 경고
    'no-console': 'off', // console.log 사용가능
    eqeqeq: 'error', // === 사용
    '@typescript-eslint/no-unused-vars': 'warn', // Typescript에서 사용하지 않는 변수는 경고
    'react/jsx-uses-react': 'error', // react를 사용하지 않으면 에러
    'react/react-in-jsx-scope': 'off', // Next.js에서는 사용하지 않아도 됨
  },
};
