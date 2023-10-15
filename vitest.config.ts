import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        origin: 'http://localhost:3000',
    },

    build: {
        target: 'esnext',
    },

    test: {
        globals: true,
        environment: 'happy-dom',
    },
});
