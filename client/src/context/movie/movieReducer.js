import {
  ADD_MOVIE,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_MOVIES,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
  MOVIE_ERROR,
  GET_MOVIES,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
        loading: false,
      };
    case FILTER_MOVIES:
      return {
        ...state,
        filtered: state.movies.filter((movie) => {
          //desc should be changed to title of movie
          const regex = new RegExp(`${action.payload}`, 'gi');
          return movie.desc.match(regex);
        }),
        loading: false,
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        loading: false,
      };
    default:
      return state;
  }
};
