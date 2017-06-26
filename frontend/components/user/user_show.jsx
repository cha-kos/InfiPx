import React from 'react';
import Header from '../header/header_container';
import FollowButton from '../follow/follow_button_container';


class User extends React.Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
   if (this.props.match.params.id !== nextProps.match.params.id) {
     this.props.getUser(nextProps.match.params.id);
   }
  }

  // userPhotos () {
  //   let photos = this.props.photos.map (photo => {
  //     if (photo.user_id === this.props.user.id){
  //       return (<li><img src={photo.image_url}/></li>);
  //     }
  //   });
  // }


  render () {

    if (!this.props.user) {
      return (<h3>...loading</h3>);
      }

    return (
      <div className='user-show-div'>
        <Header/>
        <img src={this.props.user.avatar_url} />
        <p>{this.props.user.username}</p>
        <FollowButton />
      </div>
    );
  }
}

export default User;

// <ul>{this.userPhotos()}</ul>
