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



- 修复 `react must be in scope when using jsx` 警告问题

  在 `eslint.config.js` 中 进入`pluginReactConfig`在 rules 中 添加
  ```
      "react/react-in-jsx-scope": "off"// 去除 react must be in scope when using jsx 提示
  
  ```

  



---

## 3、安装prettier

```bash
pnpm install prettier eslint-config-prettier eslint-plugin-pre
ttier --save-dev
```



在 `.eslint.cjs`

```js
 extends: [
    ...
    "plugin:prettier/recommended",
  ],
```



在根目录新建 `.prettierrc.cjs`

```
module.exports = {
  // 在箭头函数的参数周围是否加上括号，此处设置为避免加括号
  arrowParens: 'avoid',

  //是否在对象字面量的括号与对象之间加上空格
  bracketSpacing: true,

  //换行符的类型，此处设置为 LF（Unix风格的换行符）
  endOfLine: 'lf',

  //在JSX中的右尖括号是否与标签的末尾放在同一行
  jsxBracketSameLine: false,

  //每行的最大字符数，超过这个数值会被格式化
  printWidth: 100,

  //控制Prettier是否打包文本，保持原样或者自动换行
  proseWrap: 'preserve',

  // 是否在语句末尾添加分号
  semi: false,

  // 是否使用单引号而非双引号
  singleQuote: true,

  // 一个制表符相当于几个空格
  tabWidth: 2,

  // 是否使用制表符来缩进，此处设置为不使用
  useTabs: false,

  // 是否在对象和数组最后一个元素后加上逗号，此处设置为使用ES5规范的逗号风格
  trailingComma: 'es5',

  // 使用的解析器，此处设置为TypeScript。
  parser: 'typescript',
}
```



新建 `.vscode/settings.json` 设置自动保存时格式化

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    }
}
```

