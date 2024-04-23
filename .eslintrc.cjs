module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // 'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off', // 禁用此规则

  },
  // overrides: [
  //   {
  //     files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
  //     parserOptions: {
  //       project: './tsconfig.json', // 如果你在使用 TypeScript，还需要指定 tsconfig.json 文件的路径
  //     },
  //   },
  // ],
}
