import React from 'react';
import { connect } from 'react-redux';
// import SearchBar from './search_bar';
// import { QueryUsers } from '../../actions/photo_actions';

const mapStateToProps = (state) => {

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
