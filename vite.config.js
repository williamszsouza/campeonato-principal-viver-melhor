import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',  // força usar a build compatível
    },
  },
})
