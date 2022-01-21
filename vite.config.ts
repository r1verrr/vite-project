import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
   define: {
    'process.env': {VUE_APP_BASE_URL:'http://120.76.240.57:8005'}
  }
})
