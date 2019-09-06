const Prova = require('../db').Prova;

exports.postNovaProva = (req, res, next) => {
  Prova.create(req.body)
    .then((prova) => {
      res.redirect('/provas');
    }).catch(console.error);
};

exports.getNovaProva = (req, res, next) => {
  res.render('provas/novaProva', {
    linkAtivo: 'novaProva',
    formAction: '/provas/nova',
    prova: Prova.build({}),
  });
};

exports.getProvas = (req, res, next) => {
  Prova.findAll().then(provas => {
    res.render('provas/listaProvas', {
      linkAtivo: 'listaProvas',
      provas: provas
    });
  }).catch(console.error);
};

exports.getEditarProva = (req, res, next) => {
  let provaId = req.params.provaId;
  Prova.findByPk(provaId).then(prova => {
    res.render('provas/editarProva', {
      linkAtivo: 'listaProvas',
      formAction: '/provas/editar/' + provaId,
      prova: prova
    });
  }).catch(console.error);
};

exports.postExcluirProva = (req, res, next) => {
  let provaId = req.body.provaId;
  Prova.findByPk(provaId).then(prova => {
    return prova.destroy();
  }).then(() => {
    res.redirect('/provas');
  }).catch(console.error);
};

exports.postEditarProva = (req, res, next) => {
  let provaId = req.params.provaId;
  Prova.findByPk(provaId).then(prova => {
    prova.update(req.body).then(() => {
      res.redirect('/provas');
    });
  }).catch(console.error);
};