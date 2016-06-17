'use strict';
module.exports = (models) => {
  require('fs').readdirSync('./routes').forEach((file) => {
    if (file !== 'index.js') require(`${__dirname}/${file}`)(models);
  });
}
