import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { generateModifyVars } from './build/generate/generateModifyVars'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
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
