import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import PhotoUploadForm from './photo_upload_form';
import { uploadPhoto } from '../../actions/photo_actions';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadPhoto: (image) => dispatch(uploadPhoto(image)),
    createPost: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUploadForm));
