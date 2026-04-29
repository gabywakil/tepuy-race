import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',

  build: {
    // Aumenta el límite de warning de chunk (default 500kb)
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // Code splitting manual: separa vendors del código de la app
        manualChunks: {
          // React core en su propio chunk (cambia poco → cache larga)
          'vendor-react': ['react', 'react-dom'],
          // Router en chunk aparte
          'vendor-router': ['react-router-dom'],
          // Iconos en chunk aparte (lucide es pesado)
          'vendor-icons': ['lucide-react'],
        },
      },
    },

    // Minificación más agresiva
    minify: 'esbuild',

    // Source maps solo en dev
    sourcemap: false,

    // Assets pequeños se inline (menos requests HTTP)
    assetsInlineLimit: 4096,
  },

  // Optimización de dependencias en dev (pre-bundling)
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
});
