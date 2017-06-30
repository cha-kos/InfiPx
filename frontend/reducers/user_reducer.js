import { RECEIVE_USER, RESET_USER } from '../actions/user_actions';
import merge from 'lodash/merge';


const initialState = {};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      let result = merge({}, state, action.user);
      debugger
      
      return result;
    // case RESET_USER:
    //     let newState = state;
    //     newState.user[action.user.id] = action.user;
    //     return newState;
    default:
      return state;

  }
};

export default userReducer;
