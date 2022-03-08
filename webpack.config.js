const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const stylesHandler = "style-loader";
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx','.scss']
    },    
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/i,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: [{
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    "targets": "defaults" 
                  }],
                  '@babel/preset-react'
                ]
              }
            }]
          },
          {
            test: /\.css$/i,
            use: [stylesHandler, "css-loader"],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [stylesHandler, "css-loader", "sass-loader"]
          },
          {
              test: /\.(svg|png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader',
              include: path.join(__dirname, 'public'),
              options: {
                publicPath: path.resolve(__dirname, '/public'),
                outputPath: 'public/',
                name: '[name].[ext]',
                esModule: false,
                limit: 25000
              }
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            loader: 'url-loader',
              include: path.join(__dirname, 'public'),
              options: {
                publicPath: path.resolve(__dirname, '/public'),
                outputPath: 'public/',
                name: '[name].[ext]',
                esModule: false,
                limit: 25000
              }
          }
        ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      new HtmlWebpackPlugin({
        template: "index.html",
        favicon: "./public/assets/images/apex_logo.ico"
      }),
      new Dotenv()
    ]
}