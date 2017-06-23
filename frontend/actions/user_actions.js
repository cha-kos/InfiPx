import * as APIUtil from '../util/session_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const getUser = (id) => (dispatch) => {
  return APIUtil.getUser(id).then(
    (user)=> dispatch(receiveUser(user)));
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};
