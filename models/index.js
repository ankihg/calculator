'use strict';
module.exports = () => {

  const models =  {};
  require('fs').readdirSync(__dirname).forEach((file) => {
    if (file !== 'index.js') require(`${__dirname}/${file}`)(models);
  });

  return models;
}
