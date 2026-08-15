

const express = require('express');
const router = express.Router();

const {getBootcamps, getBootcamp, createBootcamp} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp);


module.exports = router;