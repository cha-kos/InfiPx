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

  buttonToggle(){
    if (this.props.userId === this.props.viewerId){
      return (
        <div className='edit-button-cog'>
        <section className='edit-button-wrap'>
        <Link to={`/users/${this.props.viewerId}/edit`}><button className = 'edit-button'>Edit Profile</button></Link>
        </section>
        <button className='edit-cog-button' onClick={this.props.logout}>
        <div className='edit-cog'>
        <img src={window.images.cog_wheel}/>
        </div>
        </button>
        </div>);
      }
      else if (this.props.viewerFollows === false){
        return (
          <section className='follow-button-wrap'>
          <button onClick={this.handleFollow} className = 'follow-button'>Follow</button>
          </section>
        );
      } else {
        return(
          <section className='edit-button-wrap'>
          <button onClick={this.handleUnFollow} className = 'edit-button'>Following</button>
          </section>
        );
      }
    }

  render(){
    return(
            this.buttonToggle()
    );
  }
}

export default FollowButton;
