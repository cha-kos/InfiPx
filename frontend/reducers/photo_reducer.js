import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';
import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  REMOVE_COMMENT
} from '../actions/photo_actions';

const initialState = {};

const photoReducer = (state = initialState, action) => {
  // Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
  
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      newState[action.photo.id] = action.photo;
    return newState;
    case REMOVE_PHOTO:
      delete newState[action.photo.id];
      return newState;
    // case RECEIVE_USER:
    // photo = merge({}, state, action.user.photos);
    // return photo;
    case REMOVE_COMMENT:
    Object.assign(newState[action.photo.id], action.photo);
    return newState;
    default:
      return state;
  }
};

export default photoReducer;
