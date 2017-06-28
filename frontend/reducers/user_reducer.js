import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';


const initialState = {};


const userReducer = (state = initialState, action) => {
  // let currentState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.user);
    default:
      return state;

  }
};

export default userReducer;
