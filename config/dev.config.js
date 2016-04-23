/*
 * Loaders
 * */
var typescriptLoader = {
    test: /\.ts$/,
    loader: 'awesome-typescript-loader'
};
var jsonLoader = {
    test: /\.json$/,
    loader: 'json',
    exclude: /node_modules/
};
var sassLoader = {
    test: /\.scss$/,
    loader: 'style!css!sass'
};
var htmlLoader = {
    test: /\.html$/,
    exclude: /node_modules/,
    loader: 'raw'
};
var cssLoader = {test: /\.css$/, loaders: ['style', 'css']};
/*
 * plugins
 * */
var
HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * Webpack Configuration
 * */
module.exports = {
    entry: ['./src/bootstrap.ts'],
    output: {
        filename: 'bundle.js',
        path: './build'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        loaders: [
            typescriptLoader,
            sassLoader,
            cssLoader,
            htmlLoader,
            jsonLoader
        ]
    }
};
