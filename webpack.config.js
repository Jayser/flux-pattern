var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: './AppBootstrap',
    output: {
        path: __dirname + '/dist',
        filename: 'AppBootstrap.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-1', 'react'],
                    plugins: ['transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?modules&localIdentName=[name]-[local]___[hash:base64:5]')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([
            {
                from: 'index.html'
            },
            {
                from: 'favicon.ico'
            }
        ])
    ],
    devtool: 'eval-source-map',
    devServer: {
        port: 3000
    }
};