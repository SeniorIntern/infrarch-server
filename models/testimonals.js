const mongoose = require('mongoose');

const testimonalSchema = new mongoose.Schema({
  testimonal_id: {
    type: Number,
    unique: true,
    max: 24,
    required: true,
  },
  testimonal_desc: {
    type: String,
    requried: true,
    minlength: 3,
    maxlength: 220,
  },
  client_name: {
    type: String,
    requried: true,
    minlength: 3,
    maxlength: 26,
  },
});

const testimonalModel = mongoose.model('testimonals', testimonalSchema);

exports.testimonalModel = testimonalModel;
