import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return({
    body: '',
    photoId: ownProps.photoId,
    userId: state.session.currentUser.id,
    username: state.session.currentUser.username
  });
};

const mapDispatchToProps = dispatch => {
  return({
  createComment: (comment) => dispatch(createComment(comment))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
