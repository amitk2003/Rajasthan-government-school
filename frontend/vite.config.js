import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      '/topper-list': {
        target: 'http://localhost:5000', // Backend URL
        changeOrigin: true,
        secure: false,
      },
      '/add-topper': {
        target: 'http://localhost:5000', // For POST requests
        changeOrigin: true,
        secure: false,
      }},
}})
