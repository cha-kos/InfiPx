import React from 'react';
import Header from '../header/header_container';
import FollowButton from '../follow/follow_button_container';
import SessionUserEditForm from '../session/session_user_edit_form_container';
import { Link }  from 'react-router-dom';
import PhotoModal from '../photo/photo_modal_container';
import AvatarUploadForm from '../session/avatar_upload_container';



class User extends React.Component {

  componentDidMount() {
    if (!this.props.user) {
      this.props.getUser(this.props.match.params.id);
    } else if (!this.props.user[this.props.match.params.id]){
      this.props.getUser(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getUser(nextProps.match.params.id);
    }
  }

  userPhotos () {
    if (!this.props.user.photos){
    return null;
  } else{
      return (<ul className='user-photo-ul'>
    {this.props.user.photos.map (photo => {
        return (<li id={photo.id} className='user-photo-li'>
        <img className = 'user-photo' src={photo.image_url}
          onClick={() => this.props.openModal(
            <PhotoModal id={photo.id} userId={this.props.user.id}/>
          )}/>
          </li>);
      }
     )}
    </ul>);
   }
  }

  avatar() {
    let styles = {
      cursor: 'pointer'
    };
    if (this.props.currentUser.id === this.props.user.id){
      return (<div className='avatar-div'
                onClick={() => {
                this.props.openModal(<AvatarUploadForm
                id={this.props.currentUser.id}
                username={this.props.currentUser.username}
                />);}}>
                <img src={this.props.user.avatar_url}
                style={styles}/>
              </div>
      );
    } else {
      return (  <div className='avatar-div'>
            <img src={this.props.user.avatar_url} />
          </div>);
    }
  }

  postCount() {
    if (!this.props.user.photos){
      return 0;
    } else{
      return this.props.user.photos.length;
    }
  }

  render () {

    if (!this.props.user) {
      return (<h3>...loading</h3>);
      }


    return (
      <div >
        <Header/>
        <div className='user-show-wrap'>
          <div className='user-show-div'>
            <header className='user-show-header'>
              <div className='user-show-header-div'>
              {this.avatar()}
              <div className= 'info-div'>
                <div className = 'username-and-button'>
                  <h1 className='username'>{this.props.user.username}</h1>
                  <FollowButton user_id={this.props.user.id}/>
                </div>
                <ul className='posts-followers-following'>
                  <li className='posts-followers-li'><div className='post-follow-number'>{this.postCount()}</div> <div>posts</div></li>
                  <li className='posts-followers-li'><div className='post-follow-number'>{this.props.user.followers}</div> <div>followers</div></li>
                  <li className='following-li'><div className='post-follow-number'>{this.props.user.following}</div> <div>following</div></li>
                </ul>
                <div className='fullname-bio-wrap'>
                <span className='fullname'>{this.props.user.full_name}</span>
                  <span className='bio'>{this.props.user.bio}</span>
                </div>
              </div>
              </div>
            </header>
            {this.userPhotos()}
          </div>
        </div>
      </div>
    );
  }
}

export default User;

// <ul>{this.userPhotos()}</ul>
