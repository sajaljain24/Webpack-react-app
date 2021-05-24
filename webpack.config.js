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
        home: ['./src/home.js'],
        about: ['./src/about.js'],
        contact: ['./src/contact.js'],
        commoncss: ['./src/app.css'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].bundle.js'
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        index: 'home.html',
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: true,
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
        new HtmlWebpackPlugin({ template: './src/home.html', filename: 'home.html', inject: 'body', chunks: ["home", "commoncss"], templateParameters: { "ref": "./about.html", "myTitle": "Page 2" } }),
        new HtmlWebpackPlugin({ template: './src/home.html', filename: 'about.html', inject: 'body', chunks: ["about", "commoncss"], templateParameters: { "ref": "./contact.html", "myTitle": "Contact" } }),
        new HtmlWebpackPlugin({ template: './src/home.html', filename: 'contact.html', inject: 'body', chunks: ["contact", "commoncss"], templateParameters: { "ref": "./", "myTitle": "" } }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
}