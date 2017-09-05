const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      // {
      //   test: /\.css$/, //tests for css files
      //   use: [
      //     'style-loader', // THEN runs style loader
      //     'css-loader' //first runs css loader
      //   ]
      // },
    ]
  }
};
