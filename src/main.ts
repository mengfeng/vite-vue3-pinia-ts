/*
 * @Author: alan_mf
 * @Date: 2022-11-19 09:16:40
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-19 14:39:50
 * @FilePath: /vite-project/src/main.ts
 * @Description: 
 * 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia' 

createApp(App).use(createPinia()).mount('#app')
