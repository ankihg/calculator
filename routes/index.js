'use strict';
module.exports = (router, models) => {
  require('fs').readdirSync('./routes').forEach((file) => {
    if (file !== 'index.js') require(`${__dirname}/${file}`)(router, models);
  });
}
