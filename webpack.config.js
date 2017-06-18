const path = require('path')

module.exports = {
  entry: './lib/js/Root.js',

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'app/',
    historyApiFallback: true
  }
}
