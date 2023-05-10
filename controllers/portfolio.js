const _ = require('lodash');
const { portfolioModel } = require('../models/portfolio');

exports.getPortfolios = async (req, res) => {
  const portfolio = await portfolioModel.find();
  res.status(200).send(portfolio);
};

exports.postPortfolio = async (req, res) => {
  const portfolio = new portfolioModel(req.body);
  await portfolio.save();
  res.status(200).send(portfolio);
};
