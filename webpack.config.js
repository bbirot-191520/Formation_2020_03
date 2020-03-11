const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//solution 1
/** @type {import('webpack').Configuration} */

//ou solution 2
const config = {
  devtool: 'source-map',
  entry: './src/ts/main.ts',
  plugins: [
    // copier le fichier html dans le dossier ./dist
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // ajouter une banniere en entête de chaque fichier buildé (js, css)
    new webpack.BannerPlugin(`Copyright ${(new Date()).getFullYear()} BODETSA v1`),
    // générer le fichier main.css et l'inclure ds le html
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          //1- inclure ds le html une balise style avec le code css
          // Creates `style` nodes from JS strings
          //'style-loader',

          //2- générer le fichier main.css et l'inclure ds le html
          // include css file
          MiniCssExtractPlugin.loader,

          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.json5$/,
        use: 'json5-loader',
        type: 'javascript/auto',
      },
    ],
  },
};

module.exports = config;
