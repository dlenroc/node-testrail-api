import pkg from './package.json';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/TestRail.ts',
  external: [],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'default',
      strict: false,
      sourcemap: true,
      banner: `'use strict';\n`
        + `const fetch = require('node-fetch');\n`
        + `const FormData = require('form-data');\n`
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'default',
      sourcemap: true,
      banner: ``
        + `import fetch from 'node-fetch';\n`
        + `import FormData from 'form-data';\n`
    },
    {
      file: pkg.browser,
      format: 'es',
      exports: 'default',
      sourcemap: true
    },
    {
      file: pkg.jsdelivr,
      format: 'umd',
      exports: 'default',
      sourcemap: true,
      name: 'TestRail'
    }
  ],
  plugins: [
    typescript({useTsconfigDeclarationDir: true}),
    terser()
  ]
}
