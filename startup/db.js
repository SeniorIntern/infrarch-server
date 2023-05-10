require('dotenv').config();
const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function () {
  // db config
  mongoose.connect(process.env.Mongo_URI).then(() => {
    winston.info('Connection to MongoDB successfull...');
  });
};
