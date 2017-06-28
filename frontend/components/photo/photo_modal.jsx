import React from 'react';
import CommentForm from '../comment/comment_form_container';
import LikeButton from '../like/like_button_container';
import { deleteComment } from '../../actions/photo_actions.js';
import CommentList from '../comment/comment_list_container';


class PhotoModal extends React.Component{




  componentDidMount(){
    if (!this.props.photo){
    this.props.requestPhoto(this.props.id);
  }
}



  commentList (photo){
    return (
      <ul>
      {photo.comments.map(comment => {
        return(
          <CommentList photoId={photo.id} com={comment} photoAuthorId={photo.user_id}/>
        );
      })}
      </ul>
    );
  }

  render () {
    if (!this.props.photo){
      return null;
    }
    // return(
    //   <img src={this.state.photo.image_url} />
    // );
    return (
      <div onClick={(e) => e.stopPropagation()}>
      <img src={this.props.photo.image_url}/>
      <p> {this.props.photo.num_likes} likes. "{this.props.photo.caption}" </p>
      <LikeButton photoId={this.props.photo.id} liked={this.props.photo.viewer_liked} likeId={this.props.photo.viewer_like_id}/>
          {this.commentList(this.props.photo)}
      <CommentForm photoId={this.props.photo.id}/>
      </div>
    );
  }
}

export default PhotoModal;
