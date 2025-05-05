import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'spline-vendor': ['@splinetool/react-spline', '@splinetool/runtime'],
          'ui-vendor': ['lucide-react', 'framer-motion'],
          'physics-vendor': ['matter-js'],
        },
      },
    },
  },
})
