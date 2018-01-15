import React from 'react';
import { connect } from 'react-redux';
import { searchUsers, CLEAR_SEARCH_RESULT } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => {
  return({
    result: state.searchBar.result,
  });
};

const mapDispatchToProps = dipatch => {
  return({
    searchUsers: (query) => dispatch(searchUsers(query)),
    clearResult: () => dispatch({type: CLEAR_SEARCH_RESULT})
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
