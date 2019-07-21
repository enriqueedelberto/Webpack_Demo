const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        hot: true,
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader'

            ]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebPackPlugin({
            title: 'Plugins'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]


};