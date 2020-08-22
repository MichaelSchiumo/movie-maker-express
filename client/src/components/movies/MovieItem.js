import React from 'react';

const MovieItem = ({ movie }) => {
  const { img_url, id, desc } = movie;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'></h3>
      <img src={movie.img_url} />
      <h4>{movie.desc}</h4>
      <p>
        <button className='btn btn-dark'>See Reviews</button>
      </p>
    </div>
  );
};

export default MovieItem;
