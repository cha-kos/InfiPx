import { connect } from 'react-redux';
import CommentList from './comment_list';
import { deleteComment } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger

  return({
    currentUser: state.session.currentUser,
    body: '',
    photoId: ownProps.photoId,
    comment: ownProps.com,
    photoAuthorId: ownProps.photoAuthorId
  });
};

const mapDispatchToProps = dispatch => {
  return({
  deleteComment: (comment) => dispatch(deleteComment(comment))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);