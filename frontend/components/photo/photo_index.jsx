import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header_container';
import Footer from '../footer/footer';
import CommentForm from '../comment/comment_form_container';
import LikeButton from '../like/like_button_container';
import { deleteComment } from '../../actions/photo_actions.js';
import CommentList from '../comment/comment_list_container';

class PhotoIndex extends React.Component{


  componentDidMount(){
    this.props.requestAllPhotos();
  }

  // removeComment( comment ){
  //   debugger
  //     this.props.deleteComment(comment);
  // }

  commentList (photo){
    return (
      <ul>
      {photo.comments.map(comment => {
        return(
          <CommentList photoId={photo.id} com={comment} />
        );
      })}
      </ul>
    );
  }

  render () {

    return(
      <div>
      <Header/>
      <div className='photo-index-div'>
        <ul>
        {this.props.photos.map(photo =>{

            return (
              <li>
              <img src={this.props.currentUser.avatar_url}/>
              <p> {photo.num_likes} likes. "{photo.caption}" </p>
              <LikeButton photoId={photo.id} liked={photo.viewer_liked} likeId={photo.viewer_like_id}/>
                  {this.commentList(photo)}
                  <CommentForm photoId={photo.id}/>
              </li>
            );})}
          </ul>
        </div>
       </div>

    );
  }
}

export default PhotoIndex;

// <ul>
// {this.props.photos.map(photo =>{
//     return (
//       <li>
//       <p> {photo.caption} </p>
//       <img src={this.props.currentUser.avatar_url}/>
//       </li>
//     );})}

// <img src={currentUser.avatar_url}/>
