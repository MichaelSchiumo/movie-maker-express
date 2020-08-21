const express = require('express');
const router = express.Router();

// @route GET api/movies
// @desc Get all user's movies
// @access Private
router.get('/', (req, res) => {
  res.send('Get all movies');
});

//@route POST api/movies
//@desc Add new movie
//@access Private
router.post('/', (req, res) => {
  res.send('Add Movie');
});

module.exports = router;
