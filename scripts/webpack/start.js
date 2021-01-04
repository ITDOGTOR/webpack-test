// Core
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';
import chalk from 'chalk'; // Раскрашивает консоль
import openBrowser from 'react-dev-utils/openBrowser';

// Utils
import {choosePort} from './utils'; // Проверяет порт на занятость и выдаёт другой, если занят дефолтный

// Constants
import {HOST, PORT} from './constants';

// Config
import getDevConfig from './config/webpack.dev';

const compiler = webpack(getDevConfig());

(async () => {
  try {
    const choosenPort = await choosePort(PORT);

    if (!choosenPort) {
      console.log(chalk.yellowBright('It\'s impossible to run the app :('));
      return null;
    }

    const server = new DevServer(compiler, {
      host: HOST,
      port: choosenPort,
      historyApiFallback: true,
      overlay: true,
      quiet: true,
      hot: true,
      clientLogLevel: 'info',
    });

    server.listen(choosenPort, HOST, () => {
      console.log(`${chalk.greenBright(`Server listening on`)} ${chalk.blueBright(`http://${HOST}:${choosenPort}`)}`);
      openBrowser(`http://${HOST}:${choosenPort}`);
    });

  } catch (err) {
    console.log(chalk.redBright('❌❌❌ ERROR ❌❌❌'));
    throw new Error(err.message || err);
  }
})();
