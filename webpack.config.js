const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'app/index.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/, //tests for css files
        use: [
          'style-loader', // THEN runs style loader
          'css-loader' //first runs css loader
        ]
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    title: 'Picross',
    favicon: 'src/images/favicon.png'
  })]
};
