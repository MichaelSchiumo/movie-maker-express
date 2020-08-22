import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';
import {
  ADD_MOVIE,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_MOVIES,
  CLEAR_FILTER,
} from '../types';

const MovieState = (props) => {
  const initialState = {
    movies: [
      {
        img_url:
          'https://tse2.mm.bing.net/th?id=OIP.PxCyW_JUxLOvZf6pYtnlxwHaLH&pid=Api',
        desc: 'GoodFellas',
        id: 1,
      },
      {
        img_url:
          'https://thegobetween.files.wordpress.com/2010/08/inception01.jpg',
        desc: 'Inception',
        id: 2,
      },
      {
        img_url:
          'http://resizing.flixster.com/r7gjyIxCc4pTux_uuXu-lefTzB0=/800x1200/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/00/11170091_ori.jpg',
        desc: 'Wedding Crashers',
        id: 3,
      },
    ],
    filtered: null,
  };
  const [state, dispatch] = useReducer(movieReducer, initialState);

  //ADD MOVIE
  const addMovie = (movie) => {
    dispatch({ type: ADD_MOVIE, payload: movie });
  };
  //SET CURRENT
  //CLEAR CURRENT
  //FILTER MOVIES
  const filterMovies = (text) => {
    dispatch({ type: FILTER_MOVIES, payload: text });
  };
  //CLEAR FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        filtered: state.filtered,
        addMovie,
        filterMovies,
        clearFilter,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
