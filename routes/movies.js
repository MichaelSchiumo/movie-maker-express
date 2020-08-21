const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Movie = require('../models/Movie');

//Want this to be a public route so all users can see all movies
//add admin funcitonality
//going to do it traversy's way first with auth
//need to remove 'auth' param && middleware
// @route GET api/movies
// @desc Get all user's movies
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const movies = await Movie.find({ user: req.user.id }).sort({ date: -1 });
    res.json(movies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//@route POST api/movies
//@desc Add new movie
//@access Private
//this is where you can require admin
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('desc', 'Description is required').not().isEmpty(),
      check('img_url', 'Img required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, desc, img_url } = req.body;

    try {
      const newMovie = new Movie({
        title,
        desc,
        img_url,
        user: req.user.id,
      });

      const movie = await newMovie.save();

      res.json(movie);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

//Delete a Movie (as an admin)
// router.delete(':/id', auth, async (req, res) => {
//   try {
//     let movie = await Movie.findById(req.params.id);

//     if (!movie) return res.status(404).json({ msg: 'Movie not found' });

//     //make sure user is an admin
//     if (movie.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'Not Authorized' });
//     }

//     await Movie.findByIdAndRemove(req.params.id);
//     res.json({ msg: 'Movie was successfully deleted' });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;
