import { RECEIVE_SEARCH_RESULT, CLEAR_SEARCH_RESULT } from '../actions/search_actions';
import merge from 'lodash/merge';


const initialState = { result: [] };


const searchReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_SEARCH_RESULT:
      let result = Object.assign({}, state, action.result);
      return result;
    case CLEAR_SEARCH_RESULT:
       result = Object.assign({}, state, {result: []});
      return result;
    default:
      return state;
  }
};

export default searchReducer;
