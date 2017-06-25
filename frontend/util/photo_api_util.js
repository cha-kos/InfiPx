export const getAllPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/photos'
  });
};

export const getPhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}`,
  });
};


export const addPhoto = () => {
  return $.ajax({
    method: 'POST',
    url: `api/photos`,
  });
};

export const updatePhoto = (id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${id}/edit`,
  });
};

export const deletePhoto = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  });
};

export const addLike = ( {photo} ) => {
  return $.ajax({
    method: 'POST',
    url: `api/likes`,
    data: {photo: photo}
  });
};

export const deleteLike = (id) => {
  return $.ajax({
    method: 'DESTROY',
    url: `api/likes/${id}`
  });
};

export const addComment = ( comment ) => {

  return $.ajax({
    method: 'POST',
    url: `api/comments`,
    data: {comment: comment}
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DESTROY',
    url: `api/comments/${id}`
  });
};
