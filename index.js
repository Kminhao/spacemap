const express = require('express');
const debug = require('debug')('servidor');

const app = express();

app.use((req, res, next) => {
  let url = req.url;
  let method = req.method;
  console.log(method + ' ' + url);
  next();
});

app.use('/', (req, res, next) => {
  debug('Executando Middleware /');
  res.send('Olá no Navegador!');
});

app.listen(3000);
