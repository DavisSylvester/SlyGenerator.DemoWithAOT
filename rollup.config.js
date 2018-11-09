const resolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript2');
const commonjs = require('rollup-plugin-commonjs');
import uglify from 'rollup-plugin-uglify-es';

export default {

  input: './src/assets/ts/Core/Main.ts',
  output: {
    file: 'app/assets/js/dashboard-bundle.js',
    format: "cjs"
  },
  external: [
    
  ],
  plugins: [
    resolve({
        extensions: [ '.mjs', '.js', '.jsx', '.json', '.ts' ],
    }),
    typescript(),
    commonjs()
  ],
    
    // uglify(),
    
  
};