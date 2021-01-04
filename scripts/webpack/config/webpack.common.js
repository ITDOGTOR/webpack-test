// Core
import {DefinePlugin} from 'webpack';
import {merge} from 'webpack-merge';

// Modules
import * as modules from '../modules';

// Constants
import {BUILD_DIRECTORY, SOURCE_DIRECTORY} from '../constants';

export default () => {
  const {NODE_ENV} = process.env;
  const DEV = NODE_ENV === 'development';

  return merge(
    {
      entry: [SOURCE_DIRECTORY],
      output: {
        path: BUILD_DIRECTORY,
        filename: DEV ? 'js/[name].js' : 'js/[name].[contenthash:5].js',
        chunkFilename: DEV ? 'js/[name].js' : 'js/[name].[contenthash:5].js',
        publicPath: '/',
      },
      plugins: [
        new DefinePlugin({
          __ENV__: JSON.stringify(NODE_ENV),
          __STAGE__: NODE_ENV === 'stage',
          __DEV__: NODE_ENV === 'development',
          __PROD__: NODE_ENV === 'production',
        }),
      ],
    },
    modules.loadJavaScript(),
    modules.loadFonts(),
    modules.loadImages(),
    modules.loadSVG(),
    modules.setupHtml(),
    modules.connectMomentLocales(),
  );
};
