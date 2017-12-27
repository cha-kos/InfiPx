
export const selectAllPhotos = state => {
  return Object.keys(state).reverse().map(key => state[key]);
};

export const selectPhoto = (id, userId, state) => {
  let selectedPhoto;
  state.user[userId].photos.forEach(photo =>{
    if (photo.id === id){
      selectedPhoto = photo;
      }
    });

    return selectedPhoto;
};
