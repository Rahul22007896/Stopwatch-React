import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'Stopwatch-React',
  plugins: [react()],
  base: '/Stopwatch-React/',
})
