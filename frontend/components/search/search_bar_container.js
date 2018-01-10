import React from 'react';
import { connect } from 'react-redux';
import { searchUsers } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => {
  return({
    // ????
    result: state.result,
  });
};

const mapDispatchToProps = dipatch => {
  return({
    searchUsers: (query) => dispatch(searchUsers(query)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
