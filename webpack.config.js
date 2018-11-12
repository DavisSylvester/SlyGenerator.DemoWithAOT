const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src/assets/ts"),

    entry: {
      main: './Core/Main.ts',
      polyfills: "./Core/libs.ts",
      authenication: "./Authenication/index.ts"
    },
    output: {
        path: path.resolve(__dirname, 'app/assets/js/'),
        filename: '[name]-bundle.webpack.js'
    },
    optimization: {
        minimize: false
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
          { test: /Components\/.ts/, use: ["ts-load", "angular2-template-loader"]},
          { test: /\.ts$/, use: ["ts-loader"]},
          { test: /\.css$/, loader: 'raw-loader' },
          { test: /.html$/, loader: 'html-loader' }
          
        ]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: '**/html/*', to: '../../../app/assets/js' }
      ])
    ]
  }

