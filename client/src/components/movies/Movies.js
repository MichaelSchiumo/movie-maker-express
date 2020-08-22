import React, { Fragment, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';
import MovieItem from './MovieItem';

const Movies = () => {
  //access any state or methods associated with movie context
  const movieContext = useContext(MovieContext);

  const { movies, filtered } = movieContext;

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((movie) => <MovieItem movie={movie} key={movie.id} />)
        : movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)}
    </Fragment>
  );
};

export default Movies;
