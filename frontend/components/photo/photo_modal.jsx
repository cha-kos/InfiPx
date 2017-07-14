import React from 'react';
import CommentForm from '../comment/comment_form_container';
import LikeButton from '../like/like_button_container';
import { deleteComment } from '../../actions/photo_actions.js';
import CommentList from '../comment/comment_list_container';
import {Link} from 'react-router-dom';


class PhotoModal extends React.Component{




  componentDidMount(){
    if (!this.props.photo){
    this.props.requestPhoto(this.props.id);
  }
}



  commentList (photo){
    return (
      <ul className='photo-modal-comment-list-ul'>
      {photo.comments.map(comment => {
        return(
          <CommentList photoId={photo.id} com={comment} photoAuthorId={photo.user_id}/>
        );
      })}
      </ul>
    );
  }

  deleteButton(){
    if (this.props.currentUserId === this.props.photo.user_id){
      return (
        <button title='delete photo' className='delete-button' onClick={() => this.props.deletePhoto(this.props.photo.id)
          .then(()=>this.props.getUser(this.props.currentUserId))
          .then(()=>this.props.closeModal())}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2"/>
    <circle cx="20" cy="12" r="2"/>
    <circle cx="4" cy="12" r="2"/>
</svg>

</button>
      );
    }
  }

  render () {
    if (!this.props.photo){
      return null;
    }
    // return(
    //   <img src={this.state.photo.image_url} />
    // );
    return (
      <div onClick={(e) => e.stopPropagation()} className ='photo-modal-wrap'>
          <img className ='photo-modal-image' src={this.props.photo.image_url}/>
          <div className ='photo-modal-right'>
          <div className='photo-modal-right-top'>
            <header className='photo-modal-header'>
            <div className='photo-modal-user-div'>
                <Link to={`/users/${this.props.photo.user_id}`} className='photo-modal-avatar-link'> <img className='photo-modal-avatar-image' src={this.props.photo.user_avatar}/></Link>
                <Link to={`/users/${this.props.photo.user_id}`} className='photo-modal-author-name'> {this.props.photo.username}</Link>
              </div>
            </header>
            <div className='photo-modal-comment-list-div'>
              {this.commentList(this.props.photo)}
              </div>
            </div>
            <div className='photo-modal-right-bottom'>
              <section className='like-comment-button-container'>
                <LikeButton photoId={this.props.photo.id} liked={this.props.photo.viewer_liked} likeId={this.props.photo.viewer_like_id}/>
                <button type="button" className='comment-icon-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </button>
              </section>
              <section className='num-likes-container'>
                <div className='num-likes'> {this.props.photo.num_likes} likes</div>
              </section>
              <Link onClick={this.props.closeModal}to={`/photos/${this.props.photo.id}`} className='post-time-link' id={this.props.photo.id}>
                <div className='post-time-div'>{this.props.photo.time_ago}</div>
              </Link>
              <div className='comment-form-delete-button'>
                <CommentForm photoId={this.props.photo.id}/>
                {this.deleteButton()}
              </div>
          </div>
            </div>
      </div>
    );
  }
}

export default PhotoModal;
