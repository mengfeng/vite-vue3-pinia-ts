/*
 * @Author: alan_mf
 * @Date: 2022-11-19 15:15:35
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-19 15:20:42
 * @FilePath: /vite-project/.eslintrc.cjs
 * @Description: 
 * 
 */
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
  
