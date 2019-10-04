const express = require('express');
const router = express.Router();

const estrelasController = require('../app/controllers/estrelasController');

router.get('/editar/:estrelaId', estrelasController.getEditarestrela);
router.post('/editar/:estrelaId', estrelasController.postEditarestrela);
router.post('/excluir/:estrelaId', estrelasController.postExcluirestrela);
router.post('/novaEstrela', estrelasController.postNovaestrela);
router.get('/novaEstrela', estrelasController.getNovaestrela);
//router.get('/', estrelasController.getConstelacoes);

module.exports = router;
