const path = require('path');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),

  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new CspHtmlWebpackPlugin({
      'script-src': ['\'self\''],
      'object-src': ['\'self\''],
    }),
  ],
};