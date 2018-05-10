/**
 * Created by levy on 2018/4/24.
 */

const path = require('path');

// 为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题
// 可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 清除build/public文件夹中重复的文件
const CleanWebpackPlugin = require('clean-webpack-plugin');

// A Webpack plugin to optimize \ minimize CSS assets.
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpack = require('webpack');

// 获取所有的.css文件，合并它们的内容然后提取css内容到一个独立的”styles.css“里
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 自动刷新浏览器
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/javascript/index.js'),
            path.join(__dirname, '../src/public/javascript/PraiseButton.js'),
        ],
        tag: [
            path.join(__dirname, '../src/public/javascript/xpraise.js'),
        ]
    },
    output: {
        filename: 'public/javascript/[name].[hash:5].js',
        publicPath: "https://your_base_cdn_url", //部署的cdn地址
        path: path.join(__dirname, '../build/')
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'prod'
            }
        }),
        new CleanWebpackPlugin(path.resolve(__dirname, '../build/public'), {
            root: path.resolve(__dirname, '../'),    // 设置root,否则会报build/public is outside of the project root. Skipping..
            verbose: true
        }),
        new LiveReloadPlugin({ appendScriptTag: true }), //浏览器自动刷新
        new ExtractTextPlugin("public/stylesheet/[name].[hash:5].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/javascript/common/vendor-[hash:5].min.js',
        }),
        new HtmlWebpackPlugin({
            filename:'./views/layout.html',
            template:'src/widget/layout.html',
            inject:false,
        }),
        new HtmlWebpackPlugin({
            filename:'./views/index.html',
            template:'src/views/index.js',
            chunks:['vendor','index','tag'],
            inject:false,
        }),
        new HtmlWebpackPlugin({
            filename:'./widget/index.html',
            template:'src/widget/index.html',
            inject:false,
        }),
    ]
};
