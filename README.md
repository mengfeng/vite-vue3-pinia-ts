# Vue3+Ts+Vite+Pinia组合的高效开发套件

2022年最受欢迎的组合

### 一、Vite和Webpack区别

- webpack是一个JavaScript应用程序的静态模块打包工具，它会对整个应用程序进行依赖关系图构建。
- vite是构建工具的高阶封装，使用简单，快（开发的时候感觉没有编译过程），便于扩展。而他集成的esbuild(Go 编写) 预构建依赖，比node快 10-100 倍。

区别：

#### 1.关注层级不同

vite关注的层级更高：vite是 high level api，关注的是如何快速方便的搭建项目，相比webpack，减少了很多配置量。

webpack关注的层级更低：webpack是low level api，因为webpack更关注的是各种功能的实现，重点放在构建上。

#### 2.vite自己不包含编译能力。

它本身并不参与编译，它的编译能力只是集成了rollup和ESbuild的功能.

#### 3.启动项目vite更快，可以说是超级快。

对比webpack在dev-serve的时候，会提交所有编译的文件，而vite在dev-serve的时候利用了浏览器的native ES module功能，在浏览器请求对应的url时才提供文件，实现了根据路由的懒加载，所以启动的时候是超快的。

#### 4.vite的热更新更快。

对比webpack的热更新，热更新时，把改动过模块的相关依赖模块全部编译一次。而vite热更新时，仅让浏览器重新请求改动过的模块。

现在公司项目从webpack过渡到vite,还在不断摸索爬坑中，虽然目前vite的生态不如webpack丰富，且实用的开发者也不及webpack。
但是不可否认的是，相比于webpack, vite非常适合项目的开发，webpack适合工具的开发。

- vite为构建项目而生

- webpack为构建工具而生

### 二、Pinia和Vuex

Pinia是Vue生态里Vuex的代替者，一个全新Vue的状态管理库。在Vue3成为正式版以后，尤雨溪强势推荐的项目就是Pinia。

Pinia 是 Vue.js 的轻量级状态管理库，它使用 Vue 3 中的新反应系统来构建一个直观且完全类型化的状态管理库。
Vuex也是为Vue框架建立的一个流行的状态管理库，它也是Vue核心团队推荐的状态管理库。 Vuex高度关注应用程序的可扩展性、开发人员的工效和信心。它基于与redux相同的流量架构。Pinia 完整的符合了当时 Vuex5 提案所提到的功能点。

#### Pinia 和 Vuex

Vuex： `State`、`Gettes`、`Mutations`(同步)、`Actions`(异步)

Pinia： `State`、`Gettes`、`Actions`(同步异步都支持)

#### Pinia 核心特性

- Pinia 没有 `Mutations`

- `Actions` 支持同步和异步

- 没有模块的嵌套结构

- - Pinia 通过设计提供扁平结构，就是说每个 store 都是互相独立的，谁也不属于谁，也就是扁平化了，更好的代码分割且没有命名空间。当然你也可以通过在一个模块中导入另一个模块来隐式嵌套 store，甚至可以拥有 store 的循环依赖关系

- 更好的 `TypeScript` 支持 

- - 不需要再创建自定义的复杂包装器来支持 TypeScript 所有内容都类型化，并且 API 的设计方式也尽可能的使用 TS 类型推断

- 不需要注入、导入函数、调用它们，享受自动补全，让我们开发更加方便

- 无需手动添加 store，它的模块默认情况下创建就自动注册的

- Vue2 和 Vue3 都支持 

- - 除了初始化安装和SSR配置之外，两者使用上的API都是相同的

- 支持 `Vue DevTools`

- - 跟踪 actions, mutations 的时间线
  - 在使用了模块的组件中就可以观察到模块本身
  - 支持 time-travel 更容易调试
  - 在 Vue2 中 Pinia 会使用 Vuex 的所有接口，所以它俩不能一起使用
  - 但是针对 Vue3 的调试工具支持还不够完美，比如还没有 time-travel 功能

- 模块热更新 

- - 无需重新加载页面就可以修改模块
  - 热更新的时候会保持任何现有状态

- 支持使用插件扩展 Pinia 功能

- 支持服务端渲染

### 三、Vite生成Vue3脚手架

```ini
npm create vite@latest //构建vite+vue
npm i //下载依赖
npm run dev //启动项目
```

![](Vue3+Ts+Vite+Pinia组合的高效开发套件/image-20221119091852577.png)

![](Vue3+Ts+Vite+Pinia组合的高效开发套件/image-20221119101610847.png)

### 四、集成pinia

```ini
npm install pinia //安装pinia
```

pinia简单使用

![](Vue3+Ts+Vite+Pinia组合的高效开发套件/image-20221119150910678.png)

1.在main.ts中注册pinia

```tsx
//main.ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia' 

createApp(App).use(createPinia()).mount('#app')
```

2.创建src/type/user.d.ts

```tsx
// 用户的类型声明文件
interface IUser {
    name: string;
    age: number;
}  
```

3.创建src/store/user.ts

```tsx
//user.ts
import { defineStore } from "pinia";
 
export default defineStore("user", {
  state() {
    return {
      userList: [] as IUser[],
    };
  },
  actions: {
    getList() {
      // 模拟从后端获取数据
      let resList: IUser[] = [
        { name: "孟峰", age: 24 },
        { name: "孟一", age: 19 }
      ];
      this.userList = resList;
    },
  },
});

```

4.创建src/store/index.ts

```tsx
//index.ts
import useUserStore from "./user";
 
export default function useStore() {
  return {
    user: useUserStore(),
  };
}
```

5.App.vue使用

```vue
<script setup lang="ts">
// 从状态层导出指定模块
import useStore from "./store";
const { user } = useStore();
// 获取用户列表
user.getList();
</script>
 
<template>
  <div>
    <ul>
      <li v-for="item in user.userList">
        姓名：{{ item.name }} ---- 年龄：{{ item.age }}
      </li>
    </ul>
  </div>
</template>

```

![](Vue3+Ts+Vite+Pinia组合的高效开发套件/image-20221119151532682.png)

### 五、集成pretter和eslint

```ini
npm i prettier -D //安装prettier
npm i eslint -D //安装eslint
npx eslint --init //初始化eslint
```

根目录创建`.prettierrc.js`文件

```javascript
//.prettierrc.js
module.exports = {
    printWidth: 140,// 超过最大值换行
    tabWidth: 4, // tab键宽度，默认为4
    useTabs: true,// 使用tab（制表符）缩进而非空格
    singleQuote: true,// 用单引号代替双引号
    semi: true,// 行末是否加分号
    trailingComma: 'none',// 最后一个对象元素加逗号
    bracketSpacing: true,// 对象，数组加空格
    jsxBracketSameLine: true, // jsx > 是否另起一行
  
  };
```

```js
//.eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    amd: true
  },
  // ts eslint 配置
  parserOptions: {
    parser:'@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:vue/vue3-recommended','plugin:prettier/recommended','prettier/@typescript-eslint','plugin:@typescript-eslint/recommended'],
  // js eslint 配置
  // parserOptions: {
  //   parser: 'babel-eslint',
  //   sourceType: 'module'
  // },
  // plugins: ['html', 'vue'],
  // extends: ['plugin:vue/recommended', 'eslint:recommended'],
 
  rules: {
    'max-len': 'off',
     // 统一豁免规则，原因：直接修改可能对现有功能产生影响
     'eqeqeq': 1,
    //  'vue/no-v-html': 1,
     // 其中代码本身有问题的规则错误有
     'no-undef': 0,
     'import/no-duplicates': 0,
 
     // 可能引起格式化问题但建议手动修改代码的有
     'no-plusplus': 0,
     'no-eval': 0,
     'no-prototype-builtins': 0,
     'no-multi-assign': 0,
     'no-unused-vars': 0,
     'no-useless-escape': 0,
     'camelcase': 0,
     'vue/no-unused-components': 0,
     'vue/return-in-computed-property': 0,
     'no-param-reassign': 0,
     'prefer-const': 0,
     'prefer-destructuring': 0,
     'no-underscore-dangle': 0,
     'no-restricted-syntax': 0,
     'no-nested-ternary': 0,
     'radix': 0,
     'vue/no-side-effects-in-computed-properties': 0,
     'vue/order-in-components': 0,
     'function-paren-newline': 0,
  },
};
```

### 参考链接：

[Vite中文文档]: 	"https://cn.vitejs.dev"

[pinia中文文档]: 	"https://pinia.web3doc.top/getting-started.html#安装 "


