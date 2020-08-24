import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => {
  const { img_url, title, desc } = movie;

  const randStar = Math.floor(Math.random() * 5) + 1;

  return (
    <div className='card bg-light align-items:center'>
      <img src={img_url} alt='poster' />
      <h1 className='text-center medium'>
        <i className='fas fa-ticket-alt' /> {title}
      </h1>
      <div className='text-center'>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star'></span>
        <span class='fa fa-star'></span>
      </div>
      <p className='text-center text-medium'>{desc}</p>{' '}
      <div className='text-center'>
        <button className='btn btn-primary btn-block'>See Reviews</button>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
