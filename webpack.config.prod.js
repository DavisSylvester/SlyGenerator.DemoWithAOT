const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    context: path.resolve(__dirname, "dist"),

    entry: {
      main: './Core/Main.aot.js',
      polyfills: "./Core/vendor.aot.js",
      libs: './Core/Libs.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist2'),
        filename: '[name]-bundle.webpack.js'
    },
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: 'all'
            }
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
        // { test: /Components\/.ts/, use: ["ts-loader", "angular2-template-loader"]},
            {test: /\.ts$/, loaders: ['@ngtools/webpack']},
          { test: /\.css$/, loader: 'raw-loader' },
          { test: /.html$/, loader: 'html-loader' },
          { test: /.js$/, loader: 'raw-loader' }
          
        ]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: '**/html/*', to: '../../../app/assets/js' }
      ]),

      new ScriptExtPlugin({
        defaultAttribute: 'defer'
    }),

      new AngularCompilerPlugin({
        tsConfigPath: './src/assets/ts/tsconfig.aot.json',
        entryModule: './app.module#AppModule',
        sourceMap: true
     })
    ],
    stats: {
        // Examine all modules
        maxModules: Infinity,
        // Display bailout reasons
        optimizationBailout: true
      }
  }