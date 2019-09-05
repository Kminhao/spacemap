const Prova = require('../models/provaModel');

exports.postNovaProva = (req, res, next) => {
  let novaProva = new Prova(
    req.body.disciplina,
    req.body.professor,
    req.body.dataProva
  );
  novaProva.salvar(() => {
    res.redirect('/provas');
  });
};

exports.getNovaProva = (req, res, next) => {
  res.render('provas/novaProva', {
    linkAtivo: 'novaProva',
    formAction: '/provas/nova',
    prova: new Prova(),
  });
};

exports.getProvas = (req, res, next) => {
  Prova.listar((data) => {
    res.render('provas/listaProvas', {
      linkAtivo: 'listaProvas',
      provas: data
    });
  })
};

exports.getEditarProva = (req, res, next) => {
  let provaId = req.params.provaId;
  Prova.getProva(provaId, (prova) => {
    res.render('provas/editarProva', {
      linkAtivo: 'listaProvas',
      formAction: '/provas/editar/' + provaId,
      prova: prova
    });
  });
};

exports.postExcluirProva = (req, res, next) => {
  let provaId = req.body.provaId;
  Prova.getProva(provaId, (prova) => {
    if (prova) {
      prova.delete(() => {
        res.redirect('/provas');
      });
    }
  });
};