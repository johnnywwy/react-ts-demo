# React + TypeScript + Vite

## 1、使用 vite 构建项目

```js

```

---

## 2、引入代码规范eslint

```bash
npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
√ How would you like to use ESLint? · problems    
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · typescript
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, typescript-eslint, eslint-plugin-react
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · pnpm
```

- 安装完成后会新增 `.eslintrc.cjs` 显示如下内容

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

```



安装`eslint`插件

---

## 3、
