import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/prasannapinnam/scrimba-react-static-business-card',   // <-- replace with your repo name
})


