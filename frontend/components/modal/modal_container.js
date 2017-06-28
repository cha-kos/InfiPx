import React from "react";
import { connect } from 'react-redux';
import Modal from './modal';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {

  return ({
    open: state.modal.open,
    component: state.modal.component
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
