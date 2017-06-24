import React from 'react';
import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { requestAllPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return({
    photos: selectAllPhotos(state.photo),
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dipatch => {

  return({
    requestAllPhotos: () => dispatch(requestAllPhotos())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
