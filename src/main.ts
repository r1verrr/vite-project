import { createApp } from 'vue'
import App from './App.vue'
import { Request } from './api/request';
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(ElementPlus)

Request.init();
createApp(App).mount('#app')
