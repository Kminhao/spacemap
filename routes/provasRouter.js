const express = require('express');
const router = express.Router();

const provasController = require('../controllers/provasController');

router.get('/editar/:provaId', provasController.editarProva);
router.get('/excluir/:provaId', provasController.excluirProva);
router.post('/nova', provasController.postNovaProva);
router.get('/nova', provasController.getNovaProva);
router.get('/', provasController.getProvas);

module.exports = router;
