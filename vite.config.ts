import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://poker.evenbetpoker.com',
        changeOrigin: true,
      },
    },
    cors: true
  }
})
