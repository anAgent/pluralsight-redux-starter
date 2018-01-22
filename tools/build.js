/* eslint-disable no-console */

import webpack from 'webpack';
import config from '../webpack.config';
import 'colors';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

console.log('Building....'.blue);

webpack(config).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.erros.map(error => console.log(error.red));
  }


  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings'.bold.yellow);
    jsonStats.erros.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log('Finished'.green);

  return 0;
});
