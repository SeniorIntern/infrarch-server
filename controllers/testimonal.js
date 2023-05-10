const _ = require('lodash');
const { testimonalModel } = require('../models/testimonals');

exports.getTestimonals = async (req, res) => {
  const testimonals = await testimonalModel.find();
  res.status(200).send(testimonals);
};

exports.postTestimonal = async (req, res) => {
  const testimonal = new testimonalModel(req.body);
  await testimonal.save();
  res.status(200).send(testimonal);
};
