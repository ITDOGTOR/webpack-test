// Core
import {resolve} from 'path';
import {path as ROOT_DIRECTORY} from 'app-root-path';

const SOURCE_DIRECTORY = resolve(ROOT_DIRECTORY, './source');
const BUILD_DIRECTORY = resolve(ROOT_DIRECTORY, './build');

const HOST = 'localhost';
const PORT = 3000;

export {ROOT_DIRECTORY, SOURCE_DIRECTORY, BUILD_DIRECTORY, HOST, PORT};
