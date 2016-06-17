'use strict';
module.exports = (router, models) => {
  require('fs').readdirSync(__dirname).forEach((file) => {
    if (file !== 'index.js') require(`${__dirname}/${file}`)(router, models);
  });
}
