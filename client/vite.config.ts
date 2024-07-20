import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Permite conexiones desde cualquier IP
    port: 3000, // Puedes cambiar el puerto si es necesario
  },
  plugins: [react()],
})
