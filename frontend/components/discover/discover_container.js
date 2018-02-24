import React from 'react';
import { connect } from 'react-redux';
import Discover from './discover';
import { requestUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUsers: () => dispatch(requestUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
