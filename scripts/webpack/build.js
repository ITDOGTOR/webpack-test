// Core
import webpack from 'webpack';
import chalk from 'chalk'; // Раскрашивает консоль

// Config
import getProdConfig from './config/webpack.prod';

const compiler = webpack(getProdConfig());

compiler.run((err, stats) => {
  if (err) {
    // Ошибка конфигурации
    console.error(err.stack || err);
    if (err.details) {
      throw new Error(err.details);
    }

    return null;
  }

  const info = stats.toString({
    colors: true,
    children: true,
    env: true,
    modules: false,
    entrypoints: false,
  });

  if (stats.hasErrors()) {
    // Ошибка во время компиляции
    console.log(chalk.redBright('❌❌❌ ERROR ❌❌❌'));
    throw new Error(info);
  }

  if (stats.hasWarnings()) {
    // Предупреждение во время компиляции
    console.log(chalk.yellowBright('!!! WARNING !!!'));
    console.warn(info);
  }

  console.log(chalk.greenBright('✔✔✔ Build Completed ✔✔✔'));
  console.log(info);
});
