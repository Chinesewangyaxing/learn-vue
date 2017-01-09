const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/apps/main/index.js',
        workWithScriptLabel: './src/apps/workWithScriptLabel/index.js',
        workWithWebpack: './src/apps/workWithWebpack/index.js',
        vueInstance: './src/apps/vueInstance/index.js',
        templateSyntax: './src/apps/templateSyntax/index.js'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
            },
            {
                test: /.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        contentBase:'public/',
        public: 'public/',
        colors: true,
        progress: true,
        displayErrorDetails: true,
        historyApiFallback: true
    }
};