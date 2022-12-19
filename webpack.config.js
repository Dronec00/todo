const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.MODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined
module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 8000,
        open: true,
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js'
    },   
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
    })],
    
      module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

}