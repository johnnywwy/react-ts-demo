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



在根目录新建 `.prettierrc.cjs` 下面是我的个人喜欢的配置

```js
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

---

## 4、引入 husky

```bash
pnpm add --save-dev husky
```

```bash
pnpm exec husky init
```



`pre-commit`

```bash
#!/user/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm run lint
pnpm run format
git add .
```



## 5、引入 ` commit lint`

```
pnpm add --save-dev @commitlint/{cli,config-conventional}
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

```

规范提交方式

```bash
git commit -m 'chore: commit lint' 
```

```json
# build: 用于构建系统或者外部依赖的修改。
# chore: 与构建过程或者辅助工具和库相关的修改。
# ci: 与持续集成（Continuous Integration）系统相关的修改。
# docs: 文档相关的修改。
# feat: 添加新功能或者新特性。
# fix: 修复bug。
# perf: 改进性能的代码修改。
# refactor: 代码重构，不涉及新功能或者修复bug。
# revert: 撤销之前的提交。
# style: 代码样式、格式、空格等方面的修改，不涉及代码含义的修改。
# test: 添加或修改测试相关的代码。
```

###  

## 6、加餐 `vite` 和 `webpack`的区别

1. webpack 是一个流行的前端打包工模具
2. create-react-app 内部使用webpack 进行打包
3. vite 即是构建工具，又是打包工具

- vite 比 CRA 打包项目更快
- Vite 使用了 ES Module 的语法（仅开发环境）



## 7、useEffect执行两次的原因

- 这是React 18开始，useEffect在开发环境下会执行两次

- 模拟组件创建、销毁再创建的完成流程，及早暴露问题
- 生产环境只会执行一次

## 8、useRef 是干嘛的

1. 操作dom的
2. 可以传入普通js变量，但是不会触发 rerender

## 9、useMemo 缓存函数

```
  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(20)  

const sum = useMemo(() => {
    return num1 + num2
  }, [num1, num2])

```

