var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {test: /\.(js)$/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},

        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]

}