import { RECEIVE_USER, RESET_USER } from '../actions/user_actions';
import merge from 'lodash/merge';


const initialState = {};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      let result = merge({}, state, action.user);
      return result;
    default:
      return state;
  }
};

export default userReducer;
