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
    url: `api/posts/${id}`
  });
};
