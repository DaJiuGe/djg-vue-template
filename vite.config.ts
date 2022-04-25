/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { viteMockServe } from 'vite-plugin-mock'
import viteCompression from 'vite-plugin-compression'
import WindiCSS from 'vite-plugin-windicss'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  // build: {
  //   sourcemap: true
  // },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@views': resolve(__dirname, 'src/views'),
      '@store': resolve(__dirname, 'src/store'),
      '@router': resolve(__dirname, 'src/router')
    }
  },
  base: './',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [AntDesignVueResolver()],
      dts: 'src/components.d.ts'
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vitest',
        'pinia',
        {
          'vue-types': [['default', 'VueTypes']]
        },
        {
          axios: [['default', 'axios']]
        }
      ],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      dts: 'src/auto-import.d.ts'
    }),
    Pages(),
    Layouts(),
    viteMockServe({
      mockPath: 'mock'
    }),
    viteCompression()
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境移除console
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: ['@vue']
    }
  }
})
