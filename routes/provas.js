const express = require('express');
const router = express.Router();

const provasController = require('../controllers/provasController');

router.post('/nova', provasController.postNovaProva);
router.get('/nova', provasController.getNovaProva);
router.get('/', provasController.getProvas);

module.exports = router;