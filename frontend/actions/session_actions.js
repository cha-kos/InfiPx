import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';


export const login = (user) => (dispatch) => {
    return APIUtil.login(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors)=> dispatch(receiveErrors(errors)));
  };

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(() =>
  dispatch(receiveCurrentUser(null)))
  .then( () => this.props.history.push(`/`));
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then(
    (currentUser)=> dispatch(receiveCurrentUser(currentUser)),
    (errors)=> dispatch(receiveErrors(errors)
    ));
  };

export const editUser = (user) => (dispatch) => {
  return APIUtil.updateUser(user).then(
    (currentUser)=> dispatch(receiveUser(currentUser)),
    (errors)=> dispatch(receiveErrors(errors)
    ));
};

export const editUserAvatar = (user) => (dispatch) => {
  return APIUtil.updateUserAvatar(user).then(
    (currentUser)=> dispatch(receiveUser(currentUser)),
    (errors)=> dispatch(receiveErrors(errors)
    ));
};

export const clearCurrentUser = () => {
  return {type: CLEAR_CURRENT_USER};
};

export const clearErrors = () => {
  return {type: CLEAR_ERRORS};
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};
export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
