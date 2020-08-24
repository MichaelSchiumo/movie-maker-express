import React, { Fragment, useContext, useEffect } from 'react';
import MovieContext from '../../context/movie/movieContext';
import MovieItem from './MovieItem';
import Spinner from '../../components/layout/Spinner';

const Movies = () => {
  const movieContext = useContext(MovieContext);

  const { movies, filtered, getMovies, loading } = movieContext;

  useEffect(() => {
    getMovies();
    //eslint-disable-next-line
  }, []);

  if (movies.length === 0) {
    return <h4>Please add a movie</h4>;
  }

  return (
    <Fragment>
      {movies !== null && !loading ? (
        <Fragment>
          {filtered !== null
            ? filtered.map((movie) => (
                <MovieItem movie={movie} key={movie._id} />
              ))
            : movies.map((movie) => (
                <MovieItem movie={movie} key={movie._id} />
              ))}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Movies;
