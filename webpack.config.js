const path = require('path')

module.exports = {
    entry: './assets/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets/js/build')
    },
    mode: "development"
}