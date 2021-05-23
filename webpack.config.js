// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//     mode: "development",
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/i,
//                 exclude: /node_modules/,
//                 use: ["babel-loader"]
//             },
//             {
//                 test: /\.css$/i,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader'],
//             },
//         ],

//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'Webpack Basic App',
//         }),
//         new MiniCssExtractPlugin({
//             filename: '[name].css',
//         }),
//     ],
//     output: {
//         filename: '[name].js',

//         path: path.resolve(__dirname, './dist/js'),
//         clean: true,
//     },
//     devServer: {
//         contentBase: path.join(__dirname, 'dist'),
//         compress: true,
//         port: 9000,
//         watchContentBase: true,
//     },
// };
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Where files should be sent once they are bundled
    entry: {
        index: './src/index.js',
        index2: './src/index2.js',
        App: './src/app.css',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js'
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        watchContentBase: true
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html' }),
        new HtmlWebpackPlugin({ template: './src/index2.html', filename: 'index2.html' }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
}