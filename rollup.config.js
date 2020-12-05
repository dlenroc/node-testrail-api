import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/TestRail.ts',
  external: [],
  output: [
    {
      file: pkg.browser,
      format: 'es',
      exports: 'default',
      sourcemap: true,
    },
    {
      file: pkg.jsdelivr,
      format: 'umd',
      exports: 'default',
      sourcemap: true,
      name: 'TestRail',
    },
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'default',
      strict: false,
      sourcemap: true,
      banner: `'use strict';\n`
        + `const http = require('http');\n`
        + `const https = require('https');\n`
        + `const nodeFetch = require('node-fetch');\n`
        + `const FormData = require('form-data');\n\n`
        + `const options = { keepAlive: true };\n`
        + `const httpAgent = new http.Agent(options);\n`
        + `const httpsAgent = new https.Agent(options);\n`
        + `const agent = (url) => url.protocol === 'http:' ? httpAgent : httpsAgent;\n`
        + `const fetch = (url, init) => nodeFetch(url, { agent, ...init });\n`,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'default',
      sourcemap: true,
      banner: ``
        + `import http from 'http';\n`
        + `import https from 'https';\n`
        + `import nodeFetch from 'node-fetch';\n`
        + `import FormData from 'form-data';\n\n`
        + `const options = { keepAlive: true };\n`
        + `const httpAgent = new http.Agent(options);\n`
        + `const httpsAgent = new https.Agent(options);\n`
        + `const agent = (url) => url.protocol === 'http:' ? httpAgent : httpsAgent;\n`
        + `const fetch = (url, init) => nodeFetch(url, { agent, ...init });\n`,
    },
  ],
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    terser()
  ],
};
