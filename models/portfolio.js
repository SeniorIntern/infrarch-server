const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  p_id: {
    type: Number,
    unique: true,
    max: 24,
    required: true,
  },
  displayImg: {
    type: String,
    requried: true,
    minlength: 3,
    maxlength: 40,
  },
  displayTitle: {
    type: String,
    requried: true,
    minlength: 3,
    maxlength: 26,
  },
  displayDate: {
    type: String,
    requried: true,
    minlength: 8,
    maxlength: 24,
  },
});

const portfolioModel = mongoose.model('portfolios', portfolioSchema);

exports.portfolioModel = portfolioModel;
