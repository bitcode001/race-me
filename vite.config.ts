import { resolve } from 'path';
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
export default defineConfig({
  // ...
  // base: '',
  // root: 'src',
  root,
  build: {
    minify: true,
    outDir,
    emptyOutDir: true,
    rollupOptions: {
        input: {
            main: resolve(root, 'index.html'),
        },
    }
  },
  server: {
    watch: {
      usePolling: true
    },
    host: true, // Need for docker container port mapping
    strictPort: true,
    // port: 5173
  }
})
