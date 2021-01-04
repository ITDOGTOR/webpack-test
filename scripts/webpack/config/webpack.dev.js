// Core
import {merge} from 'webpack-merge';

// Config
import getCommonConfig from './webpack.common';

// Modules
import * as modules from '../modules';

module.exports = () => {
  return merge(getCommonConfig(),
    {
      mode: 'development',
      devtool: 'cheap-module-eval-source-map',
    },
    modules.loadDevCss(),
    modules.connectFriendlyErrors(),
  );
};
