const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Movie = require('../models/Movie');
const Review = require('../models/Review');
const mongoose = require('mongoose');
//GET ALL route for movies
router.get('/', function (req, res) {
  try {
    Movie.find({}, function (err, movies) {
      var movieMap = [];

      movies.forEach(function (movie) {
        movieMap.push(movie);
      });

      res.json(movieMap);
    });
  } catch (err) {
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

//Read One movie

router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findOne({ _id: req.params.id });

    if (!movie) return res.status(404).json({ msg: 'Contact not found' });

    res.json(movie);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//create review

router.post('/:id', async (req, res) => {
  try {
    const movie = await Movie.findOne({ _id: req.params.id });

    if (!movie) return res.status(404).json({ msg: 'Contact not found' });

    const { score, comment } = req.body;

    const newReview = new Review({
      score,
      comment,
    });

    const review = await newReview.save();
    movie.reviews.push(review);
    movie.save();

    res.json(movie);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//get all reviews for a movie
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findOne({ _id: req.params.id });
    if (!movie) return res.status(404).json({ msg: 'Contact not found' });

    res.json(movie.reviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
