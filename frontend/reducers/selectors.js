// import { values } from 'lodash';
//
//
// export const selectAllPosts = ({posts}) => {
//    
//    return (values(posts))
//  };

export const selectAllPhotos = state => {
  return Object.keys(state).map(key => state[key]);
};
