import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
    include: ['src/**/*.{test,spec}.{js,jsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'json-summary'],
      exclude: [
        'node_modules/',
        'src/setupTests.js',
      ],
    },
    deps: {
      inline: ['@splinetool/react-spline'],
    },
    outputFile: {
      json: 'coverage/vitest-results.json'
    }
  },
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
}); 