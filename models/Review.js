const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  score: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('review', ReviewSchema);
