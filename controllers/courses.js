
const Course = require('../models/Course');
exports.getCourses = async (req, res) => {
  try {

    const courses = await Course.find({bootcamp: req.params.bootcampId})

res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

exports.createCourse = async (req, res) => {
  try {
       req.body.bootcamp = req.params.bootcampId;
       const postCourse = await Course.create(req.body);
 
res.status(201).json({
      success: true,
      data: postCourse
    });

  } catch (err) {

res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

exports.getCourse = async (req, res) => {
try{
const singleCourse = await Course.findById(req.params.id)
  
   if (!singleCourse) {
    return res.status(404).json({
      success: false,
      error: `Course not found with id of ${req.params.id}`// handles expected error

    });
   }
  res.status(200).json({
      success: true,
      data: singleCourse
    });
  
} catch (err) {
  res.status(400).json({
      success: false,
      error: 'Server Error'
    });
  }
}

exports.updateCourse = async (req, res) => { 
  
  try {  
const putCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after', runValidators: true })

if (!putCourse) {
    return res.status(404).json({
      success: false,
      error: `Course not found with id of ${req.params.id}`// handles expected error

    });
  }
res.status(200).json({
      success: true,
      data: putCourse
    });


    } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}


exports.deleteCourse = async (req, res) => {
  try{
  const removeCourse = await Course.findByIdAndDelete(req.params.id)
    
   if (!removeCourse) {
    return res.status(404).json({
      success: false,
      error: `Course not found with id of ${req.params.id}`// handles expected error

    });
   }
   res.status(200).json({
      success: true,
      data: {}
    });
  
  } catch (error) {//handles unexpected error

    res.status(400).json({
      success: false,
      error: 'Server Error'
    });

  }
  };








/*

 

exports.deleteBootcamp = async (req, res) => {
  try{
  const removeBootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
    
   if (!removeBootcamp) {
    return res.status(404).json({
      success: false,
      error: `Bootcamp not found with id of ${req.params.id}`// handles expected error

    });
   }
   res.status(200).json({
      success: true,
      data: {}
    });
  
  } catch (error) {//handles unexpected error

    res.status(500).json({
      success: false,
      error: 'Server Error'
    });

  }
  };



*/







  



 