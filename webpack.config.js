const path = require('path');

module.exports = {

    entry: './calculate.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
      contentBase : path.resolve(__dirname , 'dist'),
      port:3000,
    },

   mode:"development",

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
  };
 