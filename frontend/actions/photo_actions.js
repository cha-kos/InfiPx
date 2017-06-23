import * as APIUtil from '../util/photo_api_util';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const CREATE_PHOTO = 'CREATE_PHOTO';
export const UPDATE_PHOTO = 'UPDATE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';


export const requestAllPhotos = () => (dispatch) => {
  return (APIUtil.getAllPhotos()
    .then(photos => dispatch(receiveAllPhotos(photos))
  ));
};

export const requestPhoto = (id) => (dispatch) => {
  return (APIUtil.getPhoto(id)
    .then(photos => dispatch(receivePhoto(photos))
  ));
};

export const uploadPhoto = (photo) => (dispatch) => {
  return (APIUtil.addPhoto(photo)
    .then(photo => dispatch(receivePhoto(photo))));
};


export const receiveAllPhotos = (photos) => {
  return ({
    type: CREATE_PHOTO,
    photos,
  });
};


export const receivePhoto = (photo) => {
  return ({
    type: RECEIVE_PHOTO,
    photo: {photo}
  });
};

export const deletePhoto = (photo) => {
  return ({
    type: DELETE_PHOTO,
    photo
  });
};
