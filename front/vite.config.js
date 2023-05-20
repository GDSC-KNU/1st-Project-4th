import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/1st-Project-4th/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    },
  },
})
// https://gdsc-knu.github.io/1st-Project-4th/