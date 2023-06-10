import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteAliases } from 'vite-aliases'
import { generateModifyVars } from './build/generate/generateModifyVars'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteAliases(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // javascriptEnabled: true
        modifyVars: generateModifyVars()
      }
    },
  }
})
