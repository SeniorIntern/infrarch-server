const _ = require('lodash');
const { memberModel } = require('../models/members');

exports.getMembers = async (req, res) => {
  const members = await memberModel.find();
  res.status(200).send(members);
};

exports.postMember = async (req, res) => {
  const member = new memberModel(req.body);
  await member.save();
  res.status(200).send(member);
};
