import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MovieContext from '../../context/movie/movieContext';
import AlertContext from '../../context/alert/alertContext';

const MovieItem = ({ movie }) => {
  const { img_url, title, desc, _id } = movie;
  const movieContext = useContext(MovieContext);
  const alertContext = useContext(AlertContext);

  const { setCurrent, clearCurrent, current } = movieContext;
  const { setAlert } = alertContext;

  const onSelect = () => {
    setAlert(
      'Sorry, we cannot display reviews for this movie currently',
      'danger'
    );
  };

  const onDeselect = () => {
    clearCurrent();
  };

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
        <button onClick={onSelect} className='btn btn-primary btn-block'>
          See Reviews
        </button>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
