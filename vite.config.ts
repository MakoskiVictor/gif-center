import { defineConfig } from 'vitest/config' // <-- cambio Vite por vitest/config porque vite no sabe nada de test
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom'
  }
})
