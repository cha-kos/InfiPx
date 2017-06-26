import React from 'react';
import { Route, Link } from 'react-router-dom';
// import { createFollow } from '../../actions/photo_actions';

class FollowButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      followId: this.props.followId,
      viewerFollows: this.props.viewerFollows,
      userId: this.props.userId,
      viewerId: this.props.viewerId
    };

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnFollow = this.handleUnFollow.bind(this);
  }

  buttonToggle(){
    if (this.props.userId === this.props.viewerId){
      return (<button>Edit Profile</button>);
    }
    else if (this.props.viewerFollows === false){
      return (
        <button onClick={this.handleFollow}>Follow</button>
      );
    } else {
      return(
        <button onClick={this.handleUnFollow}>Unfollow</button>
      );
    }
  }

  handleFollow(e) {
    e.preventDefault();
    this.props.createFollow({
      followee_id: this.props.userId,
      follower_id: this.props.viewerId
    });
  }

  handleUnFollow(e) {
    e.preventDefault();
    this.props.deleteFollow({
      id: this.props.followId,
      followee_id: this.props.userId
    });
  }


  render(){
    return(
      <section className='follow-button'>
            {this.buttonToggle()}
      </section>
    );
  }
}

export default FollowButton;
