// Core
import HtmlWebpackPlugin from 'html-webpack-plugin'; // Создаёт или подключает HTML файлы

export const setupHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
      title: 'Webpack App',
      favicon: './static/favicon.ico',
    }),
  ],
});

export const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash:5].[ext]',
            },
          },
        ],
      },
    ],
  },
});

export const loadSVG = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        issuer: {
          test: /\.js$/,
        },
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash:5].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.css$/,
        },
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash:5].[ext]',
            },
          },
        ],
      },
    ],
  },
});

export const loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.woff2$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:5].[ext]',
            },
          },
        ],
      },
    ],
  },
});
