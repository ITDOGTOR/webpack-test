// Core
import {merge} from 'webpack-merge';

// Config
import getCommonConfig from './webpack.common';

// Modules
import * as modules from '../modules';

module.exports = () => {
  return merge(getCommonConfig(),
    {
      mode: 'none',
      devtool: false,
    },
    modules.connectCleanerDirectories(),
    modules.connectBuildProgressIndicator(),
    modules.loadProdCss(),
    modules.optimizeBuild(),
    modules.optimizeImage(),
    modules.connectBundleAnalyzer(),
  );
};
