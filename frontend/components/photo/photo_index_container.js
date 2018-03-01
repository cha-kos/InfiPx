import React from 'react';
import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { requestAllPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';
import { deleteComment } from '../../actions/photo_actions.js';
import { createLike, deleteLike } from '../../actions/photo_actions';

const mapStateToProps = (state) => {

  return({
    photos: selectAllPhotos(state.photos),
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dipatch => {

  return({
    requestAllPhotos: () => dispatch(requestAllPhotos()),
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
