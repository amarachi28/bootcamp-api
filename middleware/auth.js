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



