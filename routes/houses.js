const express = require('express');
const router = express.Router();
const houseController = require('../controllers/houses');

router.get('/', houseController.getHouses);

router.post('/', houseController.postHouse);

module.exports = router;
