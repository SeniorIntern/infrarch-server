const _ = require('lodash');
const { houseModel } = require('../models/houses');

exports.getHouses = async (req, res) => {
  const houses = await houseModel.find();
  res.status(200).send(houses);
};

exports.postHouse = async (req, res) => {
  const house = new houseModel(req.body);
  await house.save();
  res.status(200).send(house);
};
