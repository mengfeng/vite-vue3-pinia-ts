<!--
 * @Author: alan_mf
 * @Date: 2022-11-19 09:16:40
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-19 14:46:59
 * @FilePath: /vite-project/src/App.vue
 * @Description: 
 * 
-->

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
