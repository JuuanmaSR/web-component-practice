import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
  })],
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'ChatWidget',
      fileName: (format) => `chat-widget.${format}.js`,
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  }
})
