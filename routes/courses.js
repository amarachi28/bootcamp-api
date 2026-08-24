

const express = require('express');
const router = express.Router({ mergeParams: true });
const {getCourses, createCourse, getCourse, updateCourse, deleteCourse} = require('../controllers/courses');
const {protect} = require('../middleware/auth')

router.route('/').get(protect, getCourses).post(protect, createCourse);
router.route('/:id').get(protect, getCourse).put(protect, updateCourse).delete(protect, deleteCourse);
module.exports = router;





