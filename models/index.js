'use strict';
module.exports = () => {

  const models =  {};

  // include all files in directory and inject dependencies; exlucde index
  require('fs').readdirSync(__dirname).forEach((file) => {
    if (file !== 'index.js') require(`${__dirname}/${file}`)(models);
  });

  return models;
}
