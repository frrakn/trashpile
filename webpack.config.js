var path = require('path');

module.exports = {
  entry: {
    javascript: './src/js/components/App.jsx',
    html: './src/index.html',
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        include: /src/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/css")]
  }
}
