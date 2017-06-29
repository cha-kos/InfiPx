// import { values } from 'lodash';
//
//
// export const selectAllPosts = ({posts}) => {
//
//    return (values(posts))
//  };

export const selectAllPhotos = state => {
  debugger
  return Object.keys(state).reverse().map(key => state[key]);
  // return currentUser.feedOrder.map(orderId => state.photos[orderId]);
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
