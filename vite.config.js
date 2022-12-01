import {defineConfig} from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import envCompatible from 'vite-plugin-env-compatible';
import {createHtmlPlugin} from 'vite-plugin-html';
import {viteCommonjs} from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.esm-bundler.js'
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  plugins: [
    vue(),
    vueJsx(),
    viteCommonjs(),
    envCompatible(),
    createHtmlPlugin(),
    {
      name: 'custom-hmr',
      enforce: 'post',
      handleHotUpdate({file, server}) {
        file.endsWith('.css') && (console.log(`reload ${file}`), server.ws.send({type: 'full-reload', path: '*'}));
      }
    }
  ],
  server: {strictPort: false, port: 8081, host: '0.0.0.0'},
  build: {target: 'es2019'}
})
