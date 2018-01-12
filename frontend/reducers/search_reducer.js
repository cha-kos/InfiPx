import { RECEIVE_SEARCH_RESULT } from '../actions/search_actions';
import merge from 'lodash/merge';


const initialState = { result: [] };


const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULT:
      let result = Object.assign({}, state, action.result);
      return result;
    default:
      return state;
  }
};

export default searchReducer;
