import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  root: '.',
  plugins: [react(), viteTsconfigPaths(), EnvironmentPlugin('all')],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8'
    }
  }
})
