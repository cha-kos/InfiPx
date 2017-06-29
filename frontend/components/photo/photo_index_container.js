import React from 'react';
import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { requestAllPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';
import { deleteComment } from '../../actions/photo_actions.js';

const mapStateToProps = (state) => {
  // debugger
  return({
    photos: selectAllPhotos(state.photos),
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dipatch => {

  return({
    requestAllPhotos: () => dispatch(requestAllPhotos()),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
