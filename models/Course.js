const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
},
description: {
    type: String,
    required: [true, 'Please add a description']
  },
  weeks: {
    type: Number,
    required: [true, 'How many weeks will you be avaliable?']
  },
tuition: {
    type: Number,
    required: true
  },
minimumSkill: {
    type: String,
    required: true,
    enum: [
      'beginner',
      'intermediate',
      'advanced',
    ]
  },
  
createdAt: {
    type: Date,
    default: Date.now
  },
bootcamp: {
type: mongoose.Schema.ObjectId, 
ref: 'Bootcamp', 
required: true
}

});


module.exports = mongoose.model('Course', CourseSchema);

