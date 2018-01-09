import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import photoReducer from './photo_reducer';
import userReducer from './user_reducer';
import modalReducer from './modal_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  photos: photoReducer,
  user: userReducer,
  modal: modalReducer,
  searchBar: searchReducer
});

export default rootReducer;
