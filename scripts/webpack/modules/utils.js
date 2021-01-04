// Core
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import WebpackBar from 'webpackbar';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import MomentLocalesPlugin from 'moment-locales-webpack-plugin';

export const connectFriendlyErrors = () => ({
  plugins: [new FriendlyErrorsWebpackPlugin()],
});

export const connectBuildProgressIndicator = () => ({
  plugins: [new WebpackBar()],
});

export const connectCleanerDirectories = () => ({
  plugins: [new CleanWebpackPlugin()],
});

export const connectBundleAnalyzer = () => ({
  plugins: [new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
    openAnalyzer: false,
    generateStatsFile: true,
  })],
});

export const connectMomentLocales = () => ({
  plugins: [new MomentLocalesPlugin({localesToKeep: ['es-us', 'ru']})],
});
