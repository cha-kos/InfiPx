import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = function (state, ownProps) {
  const formType = ownProps.location.pathname.slice(1);
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors.responseJSON,
    formType
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  const formType = ownProps.location.pathname.slice(1);
    const processForm = (formType === 'login') ? login : signup;
    return {
      processForm: user => {
        return dispatch(processForm(user));
      },
      formType
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SessionForm);
