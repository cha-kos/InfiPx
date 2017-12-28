import React from 'react';
import { connect } from 'react-redux';
// import SearchBar from './search_bar';
// import { QueryUsers } from '../../actions/photo_actions';

const mapStateToProps = (state) => {

  return({
    // ????
    searchQuery: state.session.searchQuery,
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dipatch => {

  return({
    // need to write function below
    requestUsers: (query) => dispatch(requestUsers(query)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
