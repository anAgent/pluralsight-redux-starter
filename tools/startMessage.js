/* eslint-disable no-console */

import 'colors';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const message = 'Starting app in ' + process.env.NODE_ENV.bold.red + ' mode...'.green;
console.log(message.green);

