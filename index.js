const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const rootDir = require('./util/rootDir');
const path = require('path');
const constelacoesRouter = require('./routes/constelacoesRouter');
const models = require ('./app/models');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public','assets')));


app.use('/constelacoes', constelacoesRouter);

app.get('/', (req, res, next) => {
  res.render('site/index', {
    titulo: 'Página Inicial'
  });
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000);
