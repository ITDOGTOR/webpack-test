module.exports = (api) => {
  const env = api.env();

  api.cache.using(() => env === 'development');

  const plugins = ['dynamic-import-node'];

  return {
    presets: [
      [
        '@babel/env',
        {
          useBuiltIns: 'usage',
          corejs: 3,
          shippedProposals: true,
          spec: true,
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins,
  };
};
