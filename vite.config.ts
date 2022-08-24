import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

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
  base: 'production' === process.env.NODE_ENV ? '/happyJ-pro/' : `./`,
  // base: import.meta.env == 'product' ? '/' : './',

  server: {
    host: '0.0.0.0',
    strictPort: true, // 检查端口是否被占用，占用直接退出
    https: false, // 是否使用https
    port: 8088,
    // port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT), // 从配置文件中读取
    open: true
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },

  build: {
    outDir: 'dist'
    // minify: 'terser', // terser not found. Since Vite v3, terser has become an optional dependency. You need to install it.
    // terserOptions: {
    //   compress: {
    //     // 移除生产环境log
    //     drop_console: true,
    //     drop_debugger: true
    //   }
    // }
    // chunkSizeWarningLimit: 1500, // 分块打包，将大包分解成更小的块
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_moudles')) {
    //         return id
    //           .toString()
    //           .split('node_moudles/')[1]
    //           .split('/')[0]
    //           .toString()
    //       }
    //     }
    //   }
    // }
  }
})
