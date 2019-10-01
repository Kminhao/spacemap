
const models = require('../models');
const Constelacao = models.Constelacao;

exports.postNovaConstelacao = (req, res, next) => {
  res.end(JSON.stringify(req.body));
  // Constelacao.create(req.body)
  //   .then((constelacao) => {
  //     res.redirect('/constelacoes');
  //   }).catch(console.error);
};

exports.getNovaConstelacao = (req, res, next) => {
  res.render('constelacoes/novaConstelacao', {
    linkAtivo: 'novaConstelacao',
    formAction: '/constelacoes/nova',
    constelacao: Constelacao.build({}),
  });
};

exports.getConstelacoes = (req, res, next) => {
  Constelacao.findAll().then(constelacoes => {
    res.render('constelacoes/listaConstelacoes', {
      linkAtivo: 'listaConstelacoes',
      constelacoes: constelacoes
    });
  }).catch(console.error);
};

exports.getEditarConstelacao = (req, res, next) => {
  let constelacaoId = req.params.constelacaoId;
  Constelacao.findByPk(constelacaoId).then(constelacao => {
    res.render('constelacoes/editarConstelacao', {
      linkAtivo: 'listaConstelacao',
      formAction: '/constelacoes/editar/' + constelacaoId,
      constelacao: constelacao
    });
  }).catch(console.error);
};

exports.postExcluirConstelacao = (req, res, next) => {
  let constelacaoId = req.body.constelacaoId;
  Constelacao.findByPk(constelacaoId).then(constelacao => {
    return constelacao.destroy();
  }).then(() => {
    res.redirect('/constelacoes');
  }).catch(console.error);
};

exports.postEditarConstelacao = (req, res, next) => {
  let constelacaoId = req.params.constelacaoId;
  Constelacao.findByPk(constelacaoId).then(constelacao => {
    constelacao.update(req.body).then(() => {
      res.redirect('/constelacoes');
    });
  }).catch(console.error);
};