// import { values } from 'lodash';
//
//
// export const selectAllPosts = ({posts}) => {
//
//    return (values(posts))
//  };

export const selectAllPhotos = state => {
  console.log(state, "Selector");
  return Object.keys(state).reverse().map(key => state[key]);
  // return currentUser.feedOrder.map(orderId => state.photos[orderId]);
};

export const selectPhoto = (id, userId, state) => {
  let selectedPhoto;
  state.user[userId].photos.forEach(photo =>{
    // debugger
    if (photo.id === id){
      selectedPhoto = photo;
      }
    });
    // debugger
    return selectedPhoto;
};
