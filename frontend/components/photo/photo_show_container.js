import React from 'react';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { requestPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return({
    photo: state[ownProps.params.match.id]
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
)(PhotoShow);
