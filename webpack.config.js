module.exports = {
    entry: {
        app1: './src/apps/app1/index.js'
    },
    output: {
        path: './public',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel',
            },
            {
                test: /.vue$/,
                loader: 'vue'
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js'
        }
    },
    webpackDevServer: {
        contentBase: 'public/',
        public: 'public/',
        hot: true,
        colors: true,
        progress: true,
        displayErrorDetails: true,
        historyApiFallback: true
    }
};