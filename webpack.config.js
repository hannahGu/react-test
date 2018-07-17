const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './src/routes.tsx',
  
    output: {
        path: path.resolve(__dirname, 'dist'),        
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode:'production',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use:'ts-loader',
          exclude: '/node_modules/'
      },
      ]
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    }
  }