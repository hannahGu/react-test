const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000','./src/routes.tsx'],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ['ts-loader'],
            exclude: '/node_modules/'
        }, ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: "source-map",
    plugins:[
new webpack.HotModuleReplacementPlugin(),
new webpack.NoEmitOnErrorsPlugin(),
new CopyWebpackPlugin([{from:'./public/index.html',to:path.resolve(__dirname, 'dist')}],{ ignore: [ '*.js', '*.css' ] })
    ]
};