import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';
import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';

// const defaultState = {
//   entities: null,
//   currentPhoto: null
// };

const photoReducer = (state = {}, action) => {
  // Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, state, action.photos);
    case RECEIVE_PHOTO:
    let photo = merge({}, state, {[action.photo.id]: action.photo});
    return photo;
    case REMOVE_PHOTO:
      delete newState[action.photo.id];
      return newState;
    case RECEIVE_USER:
    photo = merge({}, state, action.user.photos);
    return photo
    default:
      return state;
  }
};

export default photoReducer;
