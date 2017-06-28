import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { createFollow, deleteFollow } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    viewerFollows: state.user[ownProps.user_id].viewer_follows,
    userId: state.user[ownProps.user_id].id,
    viewerId: state.session.currentUser.id,
    followId: state.user[ownProps.user_id].viewer_follow_id,
  });
};

const mapDispatchToProps = dispatch => {
  return({
  createFollow: (like) => dispatch(createFollow(like)),
  deleteFollow: (id) => dispatch(deleteFollow(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
