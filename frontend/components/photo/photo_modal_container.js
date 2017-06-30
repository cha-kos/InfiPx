import React from 'react';
import { connect } from 'react-redux';
import PhotoModal from './photo_modal';
import { requestPhoto, deletePhoto } from '../../actions/photo_actions';
import { selectPhoto } from '../../reducers/selectors';
import {closeModal} from '../../actions/modal_actions';
import { getUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // dispatch(requestPhoto(ownProps.id))
  return({
    photo: state.photos[ownProps.id],
    currentUserId: state.session.currentUser.id
  });
};

const mapDispatchToProps = dipatch => {

  return({
    requestPhoto: (id) => dispatch(requestPhoto(id)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    closeModal: () => dispatch(closeModal()),
    getUser: (id) => dispatch(getUser(id)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoModal);
