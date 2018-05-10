/**
 * Created by levy on 2018/4/24.
 */

const path = require('path');

// 为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题
// 可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 清除dist文件夹中重复的文件
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

// 获取所有的.css文件，合并它们的内容然后提取css内容到一个独立的”styles.css“里
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        hot: true,
        hotOnly: true
    },
    // entry: './src/index.js',
    entry: {
        app: './src/index.js'
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].[hash].js',
        chunkFilename: '[name].bundle.js',
        // filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules文件夹
                use: [{
                    loader: "babel-loader",
                    options:{
                        "presets": ["es2015", "stage-0"]
                    }
                }]
            },
            {
                test: /\.css$/,
               // exclude: /node_modules/, // 排除node_modules文件夹
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [

        new webpack.ProvidePlugin({ //全局变量
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(['build']),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].[hash].js',
            minChunks:2 //最少被引用2次才被打进公共包
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: true
            },
            output:{
               comments: false
            },
            sourceMap: false
        }),
        new HtmlWebpackPlugin({
            title: 'webpack3 demo',
            filename: './index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
        // new webpack.NamedModulesPlugin()
    ]
};
