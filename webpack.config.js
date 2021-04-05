const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module:{
        rules:[
            {
                test: /\.(css|sass)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            }
        ]
    }
    




}