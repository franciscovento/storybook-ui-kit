import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [dts({tsconfigPath: "./tsconfig.app.json", exclude: ["**/*.test.ts", "test/"]}), react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'storybook-ui-kit'
    },
    sourcemap: true,
    target: 'es6',
    minify: false,
  }
})
