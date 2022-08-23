import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: "./", // 默认打包后 index.html 中是 /assets, 设置本项后变成 ./assets
  base: 'production' === process.env.NODE_ENV ? `/happyj-pro/` : '/',
  build: {
    outDir: 'dist'
  }
})
