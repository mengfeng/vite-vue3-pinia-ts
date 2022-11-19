/*
 * @Author: alan_mf
 * @Date: 2022-11-19 14:41:38
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-19 15:03:06
 * @FilePath: /vite-project/src/store/user.ts
 * @Description: 
 * 
 */
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
      //   resList[0].name  此时resList[0]只能点出 name 或 age
      this.userList = resList;
    },
  },
});
