const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: [
    __dirname + '/assets/js/app.js',
    __dirname + '/assets/sass/style.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'assets'), 
    filename: 'build/script.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,

        type: 'asset/resource',
        generator: {
          filename: 'build/style.min.css'
        },

        use: [
          'sass-loader'
        ]
      }
    ]
  },
};