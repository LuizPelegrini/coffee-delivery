import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/coffee-delivery/',
  experimental: {
    renderBuiltUrl(filename, details) {
      if (details.type === 'public') {
        return `https://luizpelegrini.github.io/coffee-delivery/${filename}`;
      }
    },
  },
});
