import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    // ViteImageOptimizer(),
  ],
  base: '/fae-arcade-mini-app/',
  build: {
    target: 'es2022'
  },
  esbuild: {
    target: 'es2022'
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'), // Alias @ to the src directory
    },
  },
})
