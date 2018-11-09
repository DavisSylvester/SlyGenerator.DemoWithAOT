const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/assets/ts/Core/Main.ts',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: './assets/js/dashboard-bundle.webpack.js'
      },
      optimization: {
        minimize: true
      },
      resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          { test: /\.ts$/, use: ["ts-loader"]},
          { test: /\.css$/, loader: 'raw-loader' },
          { test: /\.html$/, loader: 'raw-loader' }
          
        ]
      }
  };