// Core
import ImageminWebpackPlugin from 'imagemin-webpack-plugin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import TerserWebpackPlugin from 'terser-webpack-plugin';

export const optimizeImage = () => ({
  plugins: [
    new ImageminWebpackPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 60,
          progressive: true,
        }),
        imageminPngquant({
          quality: [0.3, 0.5],
        }),
        imageminSvgo(),
      ],
    }),
  ],
});

export const optimizeBuild = () => ({
  optimization: {
    nodeEnv: 'production',
    minimize: false,
    minimizer: [new TerserWebpackPlugin()],
    noEmitOnErrors: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    removeAvailableModules: true,
    occurrenceOrder: true,
    concatenateModules: true,
    providedExports: true,
    usedExports: true,
    sideEffects: true,
    namedModules: false,
    namedChunks: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: true,
  },
});
