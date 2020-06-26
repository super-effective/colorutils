/* eslint-disable import/no-extraneous-dependencies */
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import includePaths from 'rollup-plugin-includepaths';

const packageJson = require('./package.json');

export default {
  input: './src/colorutils.js',

  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],

  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    commonjs(),
    includePaths({ paths: ['./src'] }),
    resolve(),
  ],
};
