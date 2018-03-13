import { RECEIVE_SEARCH_RESULT, CLEAR_SEARCH_RESULT } from '../actions/search_actions';
import merge from 'lodash/merge';


const initialState = { result: [] };


const discoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DISCOVER_RESULT:
      let result = Object.assign({}, state, action.discover);
      return result;
    default:
      return state;
  }
};

export default discoverReducer;
