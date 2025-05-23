import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // So @/components/... points to src/components/...
    },
  },
  server: {
    historyApiFallback: true, // 👈 Add this
  },
})
