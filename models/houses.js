const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  design_id: {
    type: Number,
    unique: true,
    max: 24,
    required: true,
  },
  designImg: {
    type: String,
    requried: true,
    minlength: 3,
    maxlength: 40,
  },
  designTitle: {
    type: String,
    requried: true,
    minlength: 3,
    maxlength: 102,
  },
});

const houseModel = mongoose.model('houses', houseSchema);

exports.houseModel = houseModel;
