

const express = require('express');
const router = express.Router();
const courseRouter = require('./courses');
const {getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp} = require('../controllers/bootcamps');
const {protect} = require('../middleware/auth')




router.route('/').get(protect, getBootcamps).post(protect, createBootcamp);
router.route('/:id').get(protect, getBootcamp).put(protect, updateBootcamp)
.delete(protect, deleteBootcamp);
router.use('/:bootcampId/courses', courseRouter);

module.exports = router;