// module.exports = {
//   username: 'root',
//   password: 'root',
//   database: 'spacemap',
//   host: '127.0.0.1',
//   dialect: 'mysql',
// }



//ABAIXO É COISA DO PROFESSOR 
const path = require('path');

const config = {
  "development": {
    "storage": path.join(path.dirname(__dirname), 'data', 'db.sqlite'),
    "dialect": "sqlite",
  }
};
module.exports = config;