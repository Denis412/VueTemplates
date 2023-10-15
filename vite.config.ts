import { fileURLToPath, URL } from 'url';
import { defineConfig, type Alias } from 'vite';
import vue from '@vitejs/plugin-vue';

const getAliasObject = (findName: string, path: string): Alias => {
    return {
        find: findName,
        replacement: fileURLToPath(new URL(path, import.meta.url)),
    };
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    root: './src/app',
    server: {
        port: 8080,
    },
    resolve: {
        alias: [
            getAliasObject('@', './src'),
            getAliasObject('@app', './src/app'),
            getAliasObject('@processes', './src/processes'),
            getAliasObject('@layouts', './src/layouts'),
            getAliasObject('@pages', './src/pages'),
            getAliasObject('@widgets', './src/widgets'),
            getAliasObject('@features', './src/features'),
            getAliasObject('@entities', './src/entities'),
            getAliasObject('@shared', './src/shared'),
        ],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: "@import '@app/css/variables.scss';",
            },
        },
    },
});
