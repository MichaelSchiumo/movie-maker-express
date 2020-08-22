import {
  ADD_MOVIE,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_MOVIES,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    case FILTER_MOVIES:
      return {
        ...state,
        filtered: state.movies.filter((movie) => {
          //desc should be changed to title of movie
          const regex = new RegExp(`${action.payload}`, 'gi');
          return movie.desc.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
