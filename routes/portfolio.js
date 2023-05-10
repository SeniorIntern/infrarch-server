const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolio');

router.get('/', portfolioController.getPortfolios);

router.post('/', portfolioController.postPortfolio);

module.exports = router;
