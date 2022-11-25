/// <reference types="vitest" />
//Usamos esa referencia para decir que los types de test vienen de vitest y no necesito usar
//el 'vitest/config'

import { defineConfig } from 'vitest/config' // <-- cambio Vite por vitest/config porque vite no sabe nada de test
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom'
  },
})
