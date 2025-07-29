import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Добавьте эти настройки для GitHub Pages
  base: './', // Используем относительные пути
  build: {
    outDir: 'dist', // Папка для сборки
    emptyOutDir: true, // Очищать папку при сборке
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Формат именования файлов
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js'
      }
    }
  },
  // Для разработки
  server: {
    port: 5173,
    strictPort: true
  },
  preview: {
    port: 4173,
    strictPort: true
  }
})