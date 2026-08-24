exports.protect  = (req, res, next) => {

const apiKey = req.headers['x-api-key']
if (apiKey !== process.env.API_KEY) {
return res.status(401).json({
      success: false,
      error: 'Api Key do not match'

    });
  } 
 
  next();
}



/**
 


const singleBootcamp = await Bootcamp.findById(req.params.id)
    
   if (!singleBootcamp) {
    return res.status(404).json({
      success: false,
      error: `Bootcamp not found with id of ${req.params.id}`// handles expected error

    });
 */