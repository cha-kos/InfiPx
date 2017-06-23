import { merge } from 'lodash';

import {
  RECEIVE_ALL_photoS,
  RECEIVE_SINGLE_photo,
  REMOVE_photo
} from '../actions/photo_actions';

// const defaultState = {
//   entities: null,
//   currentPhoto: null
// };

const PhotosReducer = (state = {}, action) => {
  // Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_photoS:
      return merge({}, state, action.photos);
    case RECEIVE_SINGLE_photo:
    let photo = merge({}, state, {[action.photo.id]: action.photo});
    return photo;
    case REMOVE_photo:
      delete newState[action.photo.id];
      return newState;
    default:
      return state;
  }
};

export default PhotosReducer;
