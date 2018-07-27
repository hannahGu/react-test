const path = require('path');
const webpack = require('webpack');
module.exports = [{
        entry: './src/routes.tsx',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        mode: 'production',
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }, ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        devtool: "source-map"
    }, {
        entry: './public/index.html',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.html'
        },
        module: {
            rules: [{
                test: /\.html/,
                use: 'file-loader',
                exclude: '/node_modules/'
            }, ]
        },
    }

];