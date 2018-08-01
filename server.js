const express = require('express');
const app = express();
app.use(express.static('dist'))
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));
app.listen(8082,'127.0.0.1',function(){
    console.log(`server start at 127.0.0.1:8082`);
});