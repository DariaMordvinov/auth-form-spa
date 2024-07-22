import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/auth-form-spa/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: path.resolve(__dirname, "./src/components/"),
      containers: path.resolve(__dirname, "./src/containers/"),
      context: path.resolve(__dirname, "./src/context/"),
      constants: path.resolve(__dirname, "./src/constants"),
      helpers: path.resolve(__dirname, "./src/helpers")
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ],
    }
  }
})
