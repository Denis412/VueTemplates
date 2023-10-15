/// <reference types="vite/client" />

declare module '@app';
declare module '@processes';
declare module '@layouts';
declare module '@pages';
declare module '@widgets';
declare module '@features';
declare module '@entities';
declare module '@shared';

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

interface ImportMetaEnv {
    readonly VITE_EXAMPLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
