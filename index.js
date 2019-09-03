const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

var provas = [];

app.post('/provas/nova', (req, res, next) => {
  let novaProva = {
    disciplina: req.body.disciplina,
    professor: req.body.professor,
    dataProva: req.body.dataProva,
  };
  provas.push(novaProva);
  res.redirect('/provas');
});

app.get('/provas/nova', (req, res, next) => {
  res.render('novaProva');
});

app.get('/provas', (req, res, next) => {
  res.render('provas', {
    'provas': provas,
  });
})

app.get('/', (req, res, next) => {
  res.render('index', {
    titulo: 'Gerador de Declarações de Prova'
  });
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000);
