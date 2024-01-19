import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@splidejs/splide': '/splide-4.1.3/dist/js/splide.min.js',
    },
  },
})
