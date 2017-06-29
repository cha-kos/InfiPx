import * as APIUtil from '../util/session_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
// export const RESET_USER = 'RESET_USER';

export const getUser = (id) => (dispatch) => {
  return APIUtil.getUser(id).then(
    (user)=> dispatch(receiveUser(user)));
};

// export const resetUser = (id) => (dispatch) => {
//   return APIUtil.getUser(id).then(
//     (user) => dispatch(receiveResetUser)
//   );
// };

export const createFollow = (follow) => (dispatch) => {
  return APIUtil.addFollow(follow).then(
    (user) => dispatch(receiveUser(user)));
};

export const deleteFollow = (follow) => (dispatch) => {
  return APIUtil.deleteFollow(follow).then(
    (user) => dispatch(receiveUser(user)));
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

// export const receiveResetUser = (user) => {
//   return {
//     type: RESET_USER,
//     user
//   };
// };
