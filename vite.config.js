import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: true
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
})
