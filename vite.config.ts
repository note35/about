import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Export a function instead of a raw object
export default defineConfig(({ command }) => {
  // Use a ternary operator to set the base path
  const base = command === 'serve' ? '/' : '/about/';

  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: 'dist',
    }
  };
});
