import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';


const initialState = {
    user: null,
  };


const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      let currentState = merge({}, state, action.user);
      return currentState;
    default:
      return state;

  }
};

export default userReducer;
