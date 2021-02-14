import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import includePaths from 'rollup-plugin-includepaths';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default {
  input: './src/colorutils.ts',

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
    typescript(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    commonjs(),
    includePaths({ paths: ['./src'] }),
    resolve(),
  ],
};
