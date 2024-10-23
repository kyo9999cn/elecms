import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      eslintPlugin({
        include: [
          'src/**/*.js',
          'src/**/*.vue',
          'src/**/*.jsx',
          'src/**/*.ts',
          'src/*.ts',
          'src/*.js',
          'src/*.mts'
        ]
      }),
      // mock 配置项
      viteMockServe({
        mockPath: './src/mock',
        enable: mode === 'development',
        watchFiles: true
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    server: {
      host: 'localhost',
      port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT),
      strictPort: true, // 端口被占用直接退出
      // https: false,
      open: false, // 在开发服务器启动时自动在浏览器中打开应用程序
      proxy: {
        '/api': {
          target:
            mode === 'development'
              ? loadEnv(mode, process.cwd()).VITE_APP_BASE_URL
              : loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
          changeOrigin: true
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
      hmr: {
        overlay: false // 屏蔽服务器报错
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // quietDeps: true, // 可以尝试，但在高版本中似乎不起作用
          silenceDeprecations: ['legacy-js-api']
        }
      }
    }
  }
})
