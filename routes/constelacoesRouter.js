const express = require('express');
const router = express.Router();

const constelacoesController = require('../controllers/constelacoesController');

router.get('/editar/:constelacaoId', constelacoesController.getEditarConstelacao);
router.post('/editar/:constelacaoId', constelacoesController.postEditarConstelacao);
router.post('/excluir/:constelacaoId', constelacoesController.postExcluirConstelacao);
router.post('/nova', constelacoesController.postNovaConstelacao);
router.get('/nova', constelacoesController.getNovaConstelacao);
router.get('/', constelacoesController.getConstelacoes);

module.exports = router;
