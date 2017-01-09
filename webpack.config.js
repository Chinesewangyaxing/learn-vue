const path = require('path');

module.exports = {
    entry: {
        workWithScriptLabel: './src/apps/workWithScriptLabel/index.js',
        workWithWebpack: './src/apps/workWithWebpack/index.js'
    },
    output: {
        path: path.resolve(__dirname, "public"),
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
    devServer: {
        contentBase:'public/',
        public: 'public/',
        colors: true,
        progress: true,
        displayErrorDetails: true,
        historyApiFallback: true
    }
};