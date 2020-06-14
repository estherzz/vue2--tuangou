let path = require('path');
let root = process.cwd();
let {VueLoaderPlugin} = require('vue-loader');
// html插件
let HtmlWebpackPlugin = require('html-webpack-plugin')
// 拆分样式的插件
let MiniCssExtractPlugin=require('mini-css-extract-plugin');
// 压缩样式文件
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports={
    // 开发环境 production是打包
    mode:'development',
    resolve:{
        // 拓展名 别名
        extensions:['.js','.es','.vue'],
        alias:{
            'vue$':'vue/dist/vue.js',
            '@':path.join(root,'./src'),
            '@v':path.join(root,'./src/views'),
            '@c':path.join(root,'./src/components'),
            '@t':path.join(root,'./src/tools'),
        }
    },
    // 入口
    entry:path.join(root,'./src/main.js'),
    // 出口
    output:{
        path:path.join(root,'../server'),
        filename:'./static/admin/[name].js',
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                // 处理的文件
                include:path.join(root,'./src/'),
                // 排除的文件
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test:/\.vue$/,
                use:[{
                    loader:'vue-loader',
                    options:{
                        extractCss:true
                    }
                }]
            },
            {
                test:/\.css$/,
                use:['style-loader',MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader',MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test:/\.(woff|ttf)$/,
                use:['url-loader']
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(root,'public/index.html'),
            filename:'./views/admin.html',
            hash:true
        }),
        new VueLoaderPlugin(),
        // 拆分样式文件
        new MiniCssExtractPlugin({
            // ./相对于上边的path配置 即server
            filename:'./static/admin/style.css'
        }),
        // 压缩样式文件
        new OptimizeCssAssetsPlugin()
    ],
    // 优化
    optimization:{
        //拆分库文件
        splitChunks:{
            //缓存
            cacheGroups:{
                // 发布到lib目录下
                lib:{
                    name:'lib',
                    test:/node_modules/,
                    chunks:'initial'
                }
            }
        }
    }
}