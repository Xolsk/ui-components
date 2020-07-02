const path = require('path');

const resolve = {
  alias: {
    components: path.resolve('src', 'components'),
    hoc: path.resolve('src', 'hoc'),
    config: path.resolve('src', 'config'),
    utils: path.resolve('src', 'utils'),
    styles: path.resolve('src', 'styles'),
    test: path.resolve('test', ''),
  },
};
module.exports = ['@storybook/addon-docs/preset'];

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'),
                require('cssnano')({ preset: 'default' }),
              ],
            },
          },
        ],
      },
    ],
  },
  resolve,
};
