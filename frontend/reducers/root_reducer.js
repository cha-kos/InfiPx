import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import photoReducer from './photo_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  photo: photoReducer,
  user: userReducer
});

export default rootReducer;
