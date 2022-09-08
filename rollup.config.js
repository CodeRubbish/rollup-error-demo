import {babel} from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

const config = {
    input: 'src/index.ts',
    sourcemap: false,
    external: ['react'],
    output: {
        dir: 'output',
        format: 'esm',
        preserveModules: true
    },
    plugins: [typescript()]
};

export default config;