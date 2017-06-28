import React from 'react';
import {connect} from 'react-redux';
import SessionUserEditForm from './session_user_edit_form';
import { clearErrors, editUser } from '../../actions/session_actions';
import { getUser } from '../../actions/user_actions';


const mapStateToProps = function (state, ownProps) {
  //  if (state.session.errors.responseJSON)  {
  //   errors = (state.session.errors.responseJSON);
  //  } else {
  //     errors = [];
  //   }

  return {
    currentUser: state.session.currentUser,
    errors: [],
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
      editUser: user => dispatch(editUser(user)),
      clearErrors: () => dispatch(clearErrors()),
      getUser: id => dispatch(getUser(id)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (SessionUserEditForm);
