const express = require('express');
const router = express.Router();
const testimonalController = require('../controllers/testimonal');

router.get('/', testimonalController.getTestimonals);

router.post('/', testimonalController.postTestimonal);

module.exports = router;
