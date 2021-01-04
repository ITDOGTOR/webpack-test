module.exports = (api) => {
  const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV || 'development'

  api.cache.never();

  const plugins = ['@babel/proposal-class-properties', '@babel/syntax-dynamic-import'];

  if (env === 'development') {
    plugins.push('react-hot-loader/babel');
  }

  return {
    presets: [
      '@babel/react',
      [
        '@babel/env',
        {
          debug: false,
          spec: true, // делает код более медленным, но безопасным
          loose: false, // делает код быстрым, но отходит от стандарта
          modules: false,
          useBuiltIns: 'usage', // включает только нужные полифилы
          corejs: 3,
        },
      ],
    ],
    plugins,
  };
};
