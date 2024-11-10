const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');

// Rota para criar um novo herói
router.post('/heroes', heroController.createHero);
router.get('/heroes', heroController.getAllHeroes);
router.get('/heroes/:id', heroController.getHeroById);
router.put('/heroes/:id', heroController.updateHero);
router.delete('/heroes/:id', heroController.deleteHero);

module.exports = router;
