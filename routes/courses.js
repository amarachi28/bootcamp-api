

const express = require('express');
const router = express.Router({ mergeParams: true });
const {getCourses, createCourse} = require('../controllers/courses');


router.route('/').get(getCourses).post(createCourse);

module.exports = router;





/*

const express = require('express');
const router = express.Router();

const {getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp)
.delete(deleteBootcamp);


module.exports = router;*/