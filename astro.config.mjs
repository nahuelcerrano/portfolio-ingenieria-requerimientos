// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // site: 'https://tu-portfolio.vercel.app', // descomentar al desplegar
  vite: {
    plugins: [tailwindcss()],
  },
});
