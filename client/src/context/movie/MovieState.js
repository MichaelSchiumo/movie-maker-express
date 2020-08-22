import React, { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';
import {
  GET_MOVIES,
  CLEAR_MOVIES,
  ADD_MOVIE,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_MOVIES,
  CLEAR_FILTER,
  MOVIE_ERROR,
} from '../types';

const MovieState = (props) => {
  const initialState = {
    movies: [],
    filtered: null,
    error: null,
  };
  const [state, dispatch] = useReducer(movieReducer, initialState);

  //Get movies
  const getMovies = async () => {
    try {
      const res = await axios.get('/api/movies');
      console.log(res.data);
      dispatch({ GET_MOVIES, payload: res.data });
    } catch (error) {
      dispatch({
        type: MOVIE_ERROR,
        payload: error.response.msg,
      });
    }
  };

  //ADD MOVIE
  const addMovie = async (movie) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/movies', movie, config);

      dispatch({ type: ADD_MOVIE, payload: res.data });
    } catch (err) {
      dispatch({ type: MOVIE_ERROR, payload: err.response.msg });
    }
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
        error: state.error,
        addMovie,
        filterMovies,
        clearFilter,
        getMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
