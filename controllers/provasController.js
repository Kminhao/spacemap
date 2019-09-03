const Prova = require('../models/provaModel');

exports.postNovaProva = (req, res, next) => {
  let novaProva = new Prova(
    req.body.disciplina,
    req.body.professor,
    req.body.dataProva
  );
  novaProva.salvar();
  res.redirect('/provas');
};

exports.getNovaProva = (req, res, next) => {
  res.render('provas/novaProva');
};

exports.getProvas = (req, res, next) => {
  res.render('provas/listaProvas', {
    provas: Prova.listar()
  });
};
