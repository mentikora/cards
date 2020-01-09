import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import html from 'rollup-plugin-html';
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.ts',
  format: 'iife',
  moduleName: 'App',
  output: {
    file: 'public/bundle.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    html({
      include: 'src/*.html',
      htmlMinifierOptions: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        conservativeCollapse: true,
      }
    }),
    scss({
      output: 'public/bundle.css'
    }),
    resolve({extensions:['.js', '.jsx', '.ts', '.tsx']}),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**',
      sourceMaps: true
    }),
    production && terser()
  ]
};