import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Caminho relativo: funciona tanto em username.github.io quanto em
  // username.github.io/nome-do-repo/, sem precisar saber o nome do repo.
  base: './',
})
