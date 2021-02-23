'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'


// 拼接成绝对路径
function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Admin Template' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 9528 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {


    /**
     * You will need to set publicPath if you plan to deploy your site under a sub path,
     * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then publicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     * Detail: https://cli.vuejs.org/config/#publicpath
     */
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true,
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        // before: require('./mock/mock-server.js')
    },
    configureWebpack: {

        externals: {
            // CDN 的 Element 依赖全局变量 Vue， 所以 Vue 也需要使用 CDN 引入
            'vue': 'Vue',
            // 属性名称 element-ui, 表示遇到 import xxx from 'element-ui' 这类引入 'element-ui'的，
            // 不去 node_modules 中找，而是去找 全局变量 ELEMENT
            'element-ui': 'ELEMENT',
            'vue-router': 'VueRouter',
            'echarts': 'echarts',
            'axios': "axios",
            'screenfull': 'screenfull'

        },
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        plugins: [
            new BundleAnalyzerPlugin({
                //  可以是`server`，`static`或`disabled`。
                //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
                //  在“静态”模式下，会生成带有报告的单个HTML文件。
                //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
                analyzerMode: 'server',
                //  将在“服务器”模式下使用的主机启动HTTP服务器。
                analyzerHost: '127.0.0.1',
                //  将在“服务器”模式下使用的端口启动HTTP服务器。
                analyzerPort: 8888,
                //  路径捆绑，将在`static`模式下生成的报告文件。
                //  相对于捆绑输出目录。
                reportFilename: 'report.html',
                //  模块大小默认显示在报告中。
                //  应该是`stat`，`parsed`或者`gzip`中的一个。
                //  有关更多信息，请参见“定义”一节。
                defaultSizes: 'parsed',
                //  在默认浏览器中自动打开报告
                openAnalyzer: true,
                //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
                generateStatsFile: false,
                //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
                //  相对于捆绑输出目录。
                statsFilename: 'stats.json',
                //  stats.toJson（）方法的选项。
                //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
                //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
                statsOptions: null,
                logLevel: 'info' // 日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
            }),

            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

            // 下面是下载的插件的配置
            new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            }),
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 5,
                minChunkSize: 100
            })
        ]

    },
    chainWebpack(config) {
        //它可以提高第一屏的速度，建议开启预加载
        config.plugin('preload').tap(() => [{
            rel: 'preload',
            // to ignore runtime.js
            // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
            fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
            include: 'initial'
        }])

        // when there are many pages, it will cause too many meaningless requests
        config.plugins.delete('prefetch')

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .plugin('ScriptExtHtmlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.js$/
                        }])
                        .end()
                    config
                        .optimization.splitChunks({
                            chunks: 'all',
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // only package third parties that are initially dependent
                                },
                                elementUI: {
                                    name: 'chunk-elementUI', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: resolve('src/components'), // can customize your rules
                                    minChunks: 3, //  minimum common number
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        })
                        // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
                    config.optimization.runtimeChunk('single')

                }
            )

    }
}