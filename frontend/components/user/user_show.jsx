import React from 'react';
import Header from '../header/header_container';
import FollowButton from '../follow/follow_button_container';
import SessionUserEditForm from '../session/session_user_edit_form_container';
import { Link }  from 'react-router-dom';


class User extends React.Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
   if (this.props.match.params.id !== nextProps.match.params.id) {
     this.props.getUser(nextProps.match.params.id);
   }
  }

  userPhotos () {
    if (!this.props.user.photos){
    return null;
  } else{
      return (<ul>
    {this.props.user.photos.map (photo => {
  
        return (<li><Link to={`/photos/${photo.id}`}><img src={photo.image_url}/></Link></li>);

      }
     )}
    </ul>);
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

      // debugger
    return (
      <div >
        <Header/>
        <div className='user-show-div'>
          <FollowButton />
          <img src={this.props.user.avatar_url} />
          <p>{this.props.user.username}</p>
          <p>{this.props.user.full_name}</p>
          <p>{this.props.user.bio}</p>
          <p>{this.props.user.followers} Followers</p>
          <p>{this.props.user.following} Following</p>
          <p>{this.postCount()} Posts</p>
          <Link to={`/users/${this.props.currentUser.id}/edit`}>Edit</Link>
          {this.userPhotos()}
        </div>
      </div>
    );
  }
}

export default User;

// <ul>{this.userPhotos()}</ul>
