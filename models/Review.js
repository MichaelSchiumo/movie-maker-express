const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  //this is how we verify for user id when creating movies lesson47
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movies',
  },
  score: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('review', ReviewSchema);
