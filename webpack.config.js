var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=false'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js',
        chunkFilename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    test: /node_modules/,
                    priority: 20
                },
            }
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: __dirname + '/src/index.html',
            output: __dirname + '/dist',
            inject: 'head'
        }),
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: './src/app/app.module#AppModule',
            sourceMap: true
        }),
        new ScriptExtPlugin({
            defaultAttribute: 'defer'
        }),
        new webpack.ProgressPlugin()
    ]
};