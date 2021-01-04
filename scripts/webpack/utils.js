// Core
import chalk from 'chalk';
import detect from 'detect-port';
import inquirer from 'inquirer';

exports.choosePort = async (defaultPort) => {
  try {
    const port = await detect(defaultPort);
    if (port === defaultPort) {
      return defaultPort;
    }

    const message = `Port ${defaultPort} is already in use.`;

    if (process.stdout.isTTY) {
      const questionName = 'changePort';
      const question = {
        type: 'confirm',
        name: questionName,
        message: chalk.yellowBright(
          `${message}\nDo you want to run the app on another port?`,
        ),
        default: true,
      };
      const result = await inquirer.prompt(question);

      return result[questionName] ? port : null;
    }

    console.log(chalk.redBright(`${message}`));
  } catch (err) {
    console.log(chalk.redBright('❌❌❌ ERROR ❌❌❌'));
    throw new Error(err.message || err);
  }

  return null;
};
