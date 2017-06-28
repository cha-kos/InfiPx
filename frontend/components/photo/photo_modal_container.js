import React from 'react';
import { connect } from 'react-redux';
import PhotoModal from './photo_modal';
import { requestPhoto } from '../../actions/photo_actions';
import { selectPhoto } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // dispatch(requestPhoto(ownProps.id))
  return({
    photo: state.photos[ownProps.id],
    // photo: selectPhoto(ownProps.id, ownProps.userId, state),
  });
};

const mapDispatchToProps = dipatch => {

  return({
    requestPhoto: (id) => dispatch(requestPhoto(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoModal);
