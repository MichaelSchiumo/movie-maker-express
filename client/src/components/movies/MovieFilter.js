import React, { useContext, useRef, useEffect } from 'react';
import MovieContext from '../../context/movie/movieContext';

const MovieFilter = () => {
  const movieContext = useContext(MovieContext);
  const text = useRef('');

  const { filterMovies, clearFilter, filtered } = movieContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (event) => {
    if (text.current.value !== '') {
      filterMovies(event.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Search Movies...'
        onChange={onChange}
      />
    </form>
  );
};

export default MovieFilter;
