import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {currentUser: state.session.currentUser};
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (component) => dispatch(openModal(component))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
