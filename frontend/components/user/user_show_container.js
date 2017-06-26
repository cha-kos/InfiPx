import React from 'react';
import { connect } from 'react-redux';
import User from './user_show';
import { getUser } from '../../actions/user_actions';
// import { selectAllPhotos } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    user: state.user,
    photos: state.photo,
  });
};

const mapDispatchToProps = dipatch => {

  return({
    getUser: (id) => dispatch(getUser(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
