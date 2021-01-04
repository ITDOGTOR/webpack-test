// Core
import PostCssEnv from 'postcss-preset-env';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; // Создаёт CSS файлы
import Cssnano from 'cssnano'; // Минификация CSS файлов

const getSettingsCss = ({sourceMap = false} = {sourceMap: false}) => ({
  loader: 'css-loader',
  options: {
    sourceMap,
    modules: {
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    },
  },
});

const getSettingsPostCss = ({sourceMap = false, minify = false} = {sourceMap: false, minify: false}) => {
  const plugins = [
    PostCssEnv({
      stage: 0,
      features: {
        'custom-media-queries': {
          importFrom: [
            {
              customMedia: {
                '--phonePortrait': '(width <= 414px)',
                '--phoneLandscape': '(width >= 415px) and (width <= 667px)',
                '--tabletPortrait': '(width >= 668px) and (width <= 768px)',
                '--tabletLandscape': '(width >= 769px) and (width <= 1024px)',
                '--desktopS': '(width >= 1025px) and (width <= 1366px)',
                '--desktopM': '(width >= 1367px) and (width <= 1680px)',
                '--desktopL': '(width >= 1681px) and (width <= 1920px)',
                '--desktopXL': '(width >= 1921px)',
              },
            },
          ],
        },
      },
    }),
  ];

  if (minify) {
    plugins.push(Cssnano);
  }

  return {
    loader: 'postcss-loader',
    options: {
      sourceMap,
      plugins,
    },
  };
};

export const loadDevCss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          getSettingsCss({sourceMap: true}),
          getSettingsPostCss({sourceMap: false, minify: false}),
        ],
      },
    ],
  },
});

export const loadProdCss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          getSettingsCss({sourceMap: true}),
          getSettingsPostCss({sourceMap: false, minify: true}),
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:5].css',
      chunkFilename: 'css/[name].[contenthash:5].css',
    }),
  ],
});

