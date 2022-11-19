/*
 * @Author: alan_mf
 * @Date: 2022-11-19 14:41:59
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-19 15:02:20
 * @FilePath: /vite-project/src/store/index.ts
 * @Description: 
 * 
 */
import useUserStore from "./user";
 
export default function useStore() {
  return {
    user: useUserStore(),
  };
}
