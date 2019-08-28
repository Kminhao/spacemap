const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('servidor');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  debug('Executando Middleware /');
  res.send('Olá no Navegador!');
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000);
