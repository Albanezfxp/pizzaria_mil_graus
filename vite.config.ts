import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/pizzaria_mil_graus/', // Adicione esta linha
  plugins: [react()],
})
