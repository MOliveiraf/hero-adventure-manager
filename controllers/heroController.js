const Hero = require('../models/hero');

// Função para listar todos os heróis
exports.getAllHeroes = async (req, res) => {
  try {
    const heroes = await Hero.findAll();
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar heróis' });
  }
};

// Função para obter um herói específico pelo ID
exports.getHeroById = async (req, res) => {
  try {
    const hero = await Hero.findByPk(req.params.id);
    if (hero) {
      res.status(200).json(hero);
    } else {
      res.status(404).json({ error: 'Herói não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar herói' });
  }
};

// Função para atualizar um herói específico pelo ID
exports.updateHero = async (req, res) => {
  try {
    const hero = await Hero.findByPk(req.params.id);
    if (hero) {
      await hero.update(req.body);
      res.status(200).json(hero);
    } else {
      res.status(404).json({ error: 'Herói não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar herói' });
  }
};

// Função para excluir um herói específico pelo ID
exports.deleteHero = async (req, res) => {
  try {
    const hero = await Hero.findByPk(req.params.id);
    if (hero) {
      await hero.destroy();
      res.status(200).json({ message: 'Herói excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Herói não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir herói' });
  }
};
