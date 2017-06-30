import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import AvatarUploadForm from './avatar_upload_form';
import { uploadPhoto } from '../../actions/photo_actions';
import {closeModal} from '../../actions/modal_actions';
import { clearErrors, editUserAvatar } from '../../actions/session_actions';
import { getUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUserAvatar: user => dispatch(editUserAvatar(user)),
    closeModal: () => dispatch(closeModal()),
    getUser: id => dispatch(getUser(id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AvatarUploadForm));
