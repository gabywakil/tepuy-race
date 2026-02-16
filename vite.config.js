import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tepuy-race/',
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        warn(warning)
      }
    }
  }
})
