

const express = require('express');
const router = express.Router();

const {getBootcamps, getBootcamp} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps);
router.route('/:id').get(getBootcamp);


module.exports = router;