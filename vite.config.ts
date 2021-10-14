import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

import createSvg from './src/plugin/icons';

export default defineConfig({
  plugins: [
    vue(),
    createSvg('./src/plugin/icons/svg/'),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
    },
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

  // 设置代理，根据我们项目实际情况配置
  // proxy: {
  //   '/api': {
  //     target: 'http://xxx.xxx.xxx.xxx:8000',
  //     changeOrigin: true,
  //     secure: false,
  //     rewrite: (path) => path.replace('/api/', '/')
  //   }
  // }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/styles/global.less')}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
});
