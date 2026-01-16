import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // LightningCSS sometimes fails with broken CSS
  },
  resolve:{
  alias:{
    '@': path.resolve(__dirname,'./src'),
  },
  },
  server:{
    port:5173,
  },
})

