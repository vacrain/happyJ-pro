import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()]
    })
  ],
  // base: "./", // 默认打包后 index.html 中是 /assets, 设置本项后变成 ./assets
  base: 'production' === process.env.NODE_ENV ? `/happyj-pro/` : '/',
  build: {
    outDir: 'dist'
  }
})
