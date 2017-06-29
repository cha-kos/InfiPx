import { RECEIVE_USER, RESET_USER } from '../actions/user_actions';
import merge from 'lodash/merge';


const initialState = {};


const userReducer = (state = initialState, action) => {
  // let currentState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.user);
    // case RESET_USER:
    //     let newState = state;
    //     newState.user[action.user.id] = action.user;
    //     return newState;
    default:
      return state;

  }
};

export default userReducer;
