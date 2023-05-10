const express = require('express');
const error = require('../middlewares/error');
const portfolio = require('../routes/portfolio');
const houses = require('../routes/houses');
const member = require('../routes/members');
const testimonal = require('../routes/testimonal');
const cors = require('cors');

module.exports = function (app) {
  // middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use('/api/portfolio', portfolio);
  app.use('/api/house', houses);
  app.use('/api/member', member);
  app.use('/api/testimonal', testimonal);
  app.use(error);
};
