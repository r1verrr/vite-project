import { createApp } from 'vue'
import App from './App.vue'
import { Request } from './api/request';

Request.init();
createApp(App).mount('#app')
