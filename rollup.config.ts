import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

const pkg = require('./package.json');

const libName = 'decentjs-lib';

export default {
    input: `lib/index.js`,
    targets: [
        {
            dest: './dist/index.js',
            format: 'umd',
            moduleName: pkg.name,
            sourceMap: true
        }
    ],
    external: ['ecurve', 'bs58', 'bytebuffer'],
    sourcemap: true,
    globals: {
        'utf-8-validate': 'utf-8-validate',
        bytebuffer: 'bytebuffer'
    },
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    plugins: [
        json(),
        commonjs(),
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
              }
        }),
    ]
}