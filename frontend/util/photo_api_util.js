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

export const addPhoto = (formData) => {
  return $.ajax({
    method: 'POST',
    url: `api/photos`,
    contentType: false,
    processData: false,
    data: formData,
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

export const addLike = ( like ) => {
  return $.ajax({
    method: 'POST',
    url: `api/likes`,
    data: {like: like}
  });
};

export const deleteLike = (like) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${like.id}`,
    data: {like: like}
  });
};

export const addComment = ( comment ) => {

  return $.ajax({
    method: 'POST',
    url: `api/comments`,
    data: {comment: comment}
  });
};

export const deleteComment = ( comment ) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`,
    data: ( comment )
  });
};
