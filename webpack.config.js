const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackLoder = new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') });
const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
    entry: {
        app: ['./src/app/App.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.css$/,
                use: [
                 "style-loader" ,
                 "css-loader" 
                ]
              },
                { test: /\.json$/, loader: 'json-loader'}
        ]
    },
    plugins: [HtmlWebpackLoder, HotModuleReplacementPlugin]
}   