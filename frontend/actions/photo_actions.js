import * as APIUtil from '../util/photo_api_util';
export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


export const requestAllPhotos = () => (dispatch) => {
  return (APIUtil.getAllPhotos()
    .then(photos =>{
      return (dispatch(receiveAllPhotos(photos)));}
  ));
};

export const requestPhoto = (id) => (dispatch) => {
  return (APIUtil.getPhoto(id)
    .then(photos => dispatch(receivePhoto(photos))
  ));
};

export const deletePhoto = (id) => (dispatch) => {
  return (APIUtil.deletePhoto(id)
  .then(photo => dispatch(removePhoto(photo))));
};

export const uploadPhoto = (photo) => (dispatch) => {
  return (APIUtil.addPhoto(photo)
    .then(photo => dispatch(receivePhoto(photo))));
};

// export const updatePhoto = (id) => (dispatch) => {
//   return (APIUtil.updatePhoto(id)
//     .then(photo => dispatch(receivePhoto(photo))));
// };

export const createComment = (comment) => (dispatch) => {
  return (APIUtil.addComment(comment)
    .then(photo => dispatch(receivePhoto(photo))));
};

export const deleteComment = (id) => (dispatch) => {
  return (APIUtil.deleteComment(id)
    .then(photo => dispatch(removeComment(photo)))
    .then(({photo}) => dispatch(receivePhoto(photo))));
};

export const createLike = (like) => (dispatch) => {
  return (APIUtil.addLike(like)
    .then(photo => dispatch(receivePhoto(photo))));
};

export const deleteLike = (id) => (dispatch) => {
  return (APIUtil.deleteLike(id)
    .then(photo => dispatch(receivePhoto(photo))));
};

export const receiveAllPhotos = (photos) => {
  return ({
    type: RECEIVE_ALL_PHOTOS,
    photos,
  });
};

export const removeComment = (photo) => {
  return ({
    type: REMOVE_COMMENT,
    photo,
  });
};

export const receivePhoto = (photo) => {
  return ({
    type: RECEIVE_PHOTO,
    photo: photo
  });
};

export const removePhoto = (photo) => {
  return ({
    type: REMOVE_PHOTO,
    photo
  });
};
