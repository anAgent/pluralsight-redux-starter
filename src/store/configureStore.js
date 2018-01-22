const isDev = process.env.NODE_ENV !== 'production';
const configureStoreFile = isDev ? './configureStore.dev.js' : 'configureStore.prod.js';

module.exports = require(configureStoreFile);

