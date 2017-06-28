import React from 'react';
import Header from '../header/header_container';
import FollowButton from '../follow/follow_button_container';
import SessionUserEditForm from '../session/session_user_edit_form_container';
import { Link }  from 'react-router-dom';
import PhotoModal from '../photo/photo_modal_container';


class User extends React.Component {

  componentDidMount() {
    // debugger
    if (!this.props.user) {
      this.props.getUser(this.props.match.params.id);
    } else if (this.props.user && this.props.user.id !== this.props.match.params.id){
      this.props.getUser(this.props.match.params.id);
    }
  }


  userPhotos () {
    if (!this.props.user.photos){
    return null;
  } else{
      return (<ul>
    {this.props.user.photos.map (photo => {

        return (<li><img src={photo.image_url}
          onClick={this.props.openModal(
            <PhotoModal id={photo.id} userId={this.props.user.id}/>
          )}/></li>);
        // return (<li><Link to={`/photos/${photo.id}`}><img src={photo.image_url}/></Link></li>);

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


    return (
      <div >
        <Header/>
        <div className='user-show-div'>
          <FollowButton user_id={this.props.user.id}/>
          <img src={this.props.user.avatar_url} />
          <p>{this.props.user.username}</p>
          <p>{this.props.user.full_name}</p>
          <p>{this.props.user.bio}</p>
          <p>{this.props.user.followers} Followers</p>
          <p>{this.props.user.following} Following</p>
          <p>{this.postCount()} Posts</p>
          {this.userPhotos()}
        </div>
      </div>
    );
  }
}

export default User;

// <ul>{this.userPhotos()}</ul>
