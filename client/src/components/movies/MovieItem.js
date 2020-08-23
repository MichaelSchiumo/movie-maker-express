import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => {
  const { img_url, title, desc } = movie;

  return (
    <div className='card bg-light'>
      <img src={img_url} alt='poster' />
      <h6>{title}</h6>
      <h4>{desc}</h4>
      <p>
        <button className='btn btn-dark'>See Reviews</button>
      </p>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
