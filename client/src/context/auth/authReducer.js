import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    //need to use JWT?
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    default:
      return state;
  }
};
