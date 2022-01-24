import { createApp } from 'vue'
import App from './App.vue'
import { Request } from './api/request';
import ElementPlus from 'element-plus'
<<<<<<< HEAD
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(ElementPlus)
=======
import 'element-plus/dist/index.css'
>>>>>>> 29fa328a53ed21b52eedc8acc5f76016d4821988

Request.init();
createApp(App).use(ElementPlus).mount('#app')
