const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
exports.getBootcamps = async (req, res) => {
  try {

    //paginition
    const page = parseInt(req.query.page) || 1 
    const limit = parseInt(req.query.limit) || 25

    const skip = (page - 1) * limit
   
   const bootcamps = await Bootcamp.find().skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};


 exports.getBootcamp = async (req, res) => {
  try{
  const singleBootcamp = await Bootcamp.findById(req.params.id)
    
   if (!singleBootcamp) {
    return res.status(404).json({
      success: false,
      error: `Bootcamp not found with id of ${req.params.id}`// handles expected error

    });
   }
   res.status(200).json({
      success: true,
      data: singleBootcamp
    });
  
  } catch (error) {//handles unexpected error

    res.status(500).json({
      success: false,
      error: 'Server Error'
    });

  }
  };


exports.createBootcamp = async (req, res) => {
try {
    const postBootcamp = await Bootcamp.create(req.body);
     
    res.status(201).json({
      success: true,
      data: postBootcamp
    });

    } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
  


};

exports.updateBootcamp = async (req, res) => {
try {
 const putBootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after', runValidators: true })
 
if (!putBootcamp) {
    return res.status(404).json({
      success: false,
      error: `Bootcamp not found with id of ${req.params.id}`// handles expected error

    });
    }

 res.status(200).json({
      success: true,
      data: putBootcamp
    });


    } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });

  }

};



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




  