import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => {
  const { img_url, title, desc } = movie;

  return (
    <div className='card bg-light'>
      <img src={img_url} alt='poster' />
      <h1 className='text-center x-large underline'>{title}</h1>
      <p className='text-center'>{desc}</p>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
