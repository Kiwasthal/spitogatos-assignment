import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/spitogatos-assignment/',
  plugins: [react(), vitePluginFaviconsInject('./src/assets/Logo.svg')],
});
