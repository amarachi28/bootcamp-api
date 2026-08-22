require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

const bootcamps = require('./routes/bootcamps');
//const courses = require('./routes/courses');



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Are we going?');
});
app.use(express.json()); 
app.use('/api/v1/bootcamps', bootcamps);
//app.use('/api/v1/bootcamps/:bootcampId/courses', courses);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});