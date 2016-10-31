var webpack = require('webpack')

module.exports = {
    entry: './main.js',
    output: {path: __dirname, filename: 'bundle.js'},
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}