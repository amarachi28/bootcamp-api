

const express = require('express');
const router = express.Router({ mergeParams: true });
const {getCourses, createCourse, getCourse} = require('../controllers/courses');


router.route('/').get(getCourses).post(createCourse);
router.route('/:id').get(getCourse)
module.exports = router;





/*

const express = require('express');
const router = express.Router();

const {getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp)
.delete(deleteBootcamp);


module.exports = router;*/