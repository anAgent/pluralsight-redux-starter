/* eslint-disable no-console */
import fs from 'fs';
import cheerio from 'cheerio';
import 'colors';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if(err) {
    return console.log(err.bold.red);
  }

  const $ = cheerio.load(markup);

  $('head')
    .prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (err) => {
    if(err) {
      return console.log(err.bold.red);
    }

    console.log('index.html written to /dist'.green);
  });
});
