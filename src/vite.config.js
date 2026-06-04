import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // или @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  // Никаких сложных настроек базового пути здесь быть не должно
})