import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  CLEAR_CURRENT_USER}
  from '../actions/session_actions';
import merge from 'lodash/merge';


const initialState = {
    currentUser: null,
    errors: [],
  };


const sessionReducer = (state = initialState, action) => {
  // Object.freeze(state);
  let currentState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      currentState.currentUser = action.user;
      currentState.errors = []
      return currentState;
    case RECEIVE_ERRORS:
      currentState.errors = action.errors;
      return currentState;
    case CLEAR_CURRENT_USER:
      return currentState;
    case CLEAR_ERRORS:
      currentState.errors = [];
      return currentState;
    default:
      return state;

  }
};

export default sessionReducer;
