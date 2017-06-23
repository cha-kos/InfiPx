// import { values } from 'lodash';
//
//
// export const selectAllPosts = ({posts}) => {
//    debugger
//    return (values(posts))
//  };

export const selectAllPhotos = state => {
  return Object.keys(state).map(key => state[key]);
};
