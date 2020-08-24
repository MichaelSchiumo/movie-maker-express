import {
  ADD_MOVIE,
  FILTER_MOVIES,
  CLEAR_FILTER,
  MOVIE_ERROR,
  GET_MOVIES,
  SET_CURRENT,
  CLEAR_CURRENT,
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
        movies: [action.payload, ...state.movies],
        loading: false,
      };
    case FILTER_MOVIES:
      return {
        ...state,
        filtered: state.movies.filter((movie) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return movie.title.match(regex);
        }),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        movies: [action.payload],
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        movies: [state.movies],
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
