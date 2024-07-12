import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/carful_test/', // Reemplaza 'NOMBRE_DEL_REPOSITORIO' con el nombre de tu repositorio en GitHub
  server: {
    port: 3000,
  },
})
