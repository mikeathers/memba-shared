import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import {terser} from 'rollup-plugin-terser'
// @ts-ignore
import pkg from './package.json'
import visualizer from 'rollup-plugin-visualizer'
import json from '@rollup/plugin-json'

const extensions = ['.ts', '.tsx', '.js']

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
    ],
    plugins: [
      visualizer(),
      resolve({
        extensions,
      }),
      commonjs(),
      typescript({tsconfig: 'tsconfig.rollup.json'}),
      terser(),
      json(),
    ],
    external: ['react', 'react-dom'],
  },
]
