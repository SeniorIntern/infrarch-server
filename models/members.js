const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  member_id: {
    type: Number,
    unique: true,
    max: 24,
    required: true,
  },
  member_role: {
    type: String,
    requried: true,
    minlength: 3,
    maxlength: 26,
  },
  member_fullName: {
    type: String,
    requried: true,
    minlength: 3,
    maxlength: 26,
  },
  member_img: {
    type: String,
    requried: true,
    minlength: 3,
    maxlength: 40,
  },
});

const memberModel = mongoose.model('members', memberSchema);

exports.memberModel = memberModel;
