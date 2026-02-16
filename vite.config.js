import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain: https://ramadhan2026.asrul.dev (subdomain dari Squarespace)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
