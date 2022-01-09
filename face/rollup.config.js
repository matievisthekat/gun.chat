import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';
import livereload from 'rollup-plugin-livereload';
import {terser} from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';

const isDev = Boolean(process.env.ROLLUP_WATCH);

export default {
  input: 'src/main.ts',
  output: {
    file: 'public/bundle.js',
    name: 'app',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        hydratable: true,
        generate: 'ssr'
      }
    }),
    resolve({browser: true}),
    typescript(),
    scss(),
    commonjs(),
    isDev &&
      livereload({
        watch: 'public/App.js',
        delay: 200
      }),
    !isDev && terser()
  ]
};
