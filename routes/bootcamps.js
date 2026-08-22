

const express = require('express');
const router = express.Router();
const courseRouter = require('./courses');
const {getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp} = require('../controllers/bootcamps');








router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp)
.delete(deleteBootcamp);
router.use('/:bootcampId/courses', courseRouter);

module.exports = router;