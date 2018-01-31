import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import PhotoUploadButton from './photo_upload_button';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (component) => dispatch(openModal(component))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUploadButton));
