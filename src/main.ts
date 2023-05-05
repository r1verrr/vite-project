import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { Request } from './api/request';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

Request.init();
createApp(App).use(ElementPlus).mount('#app')
