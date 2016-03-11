/**
 * Created by eric7578 on 15/10/26.
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        dashboard: './dashboard/index.jsx',
        account: './account/index.jsx',
        commons: ['react', 'react-router', 'redux', 'react-redux']
    },
    output: {
        filename: '../public/javascripts/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass!autoprefixer?{browsers:["> 5%", "ie >= 8", "Firefox < 20"]}'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ["transform-decorators-legacy"]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: '../public/javascripts/common.js'
        })
    ]
};
