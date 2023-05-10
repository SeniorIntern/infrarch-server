const express = require('express');
const router = express.Router();
const memberController = require('../controllers/members');

router.get('/', memberController.getMembers);

router.post('/', memberController.postMember);

module.exports = router;
