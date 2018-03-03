import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header_container';
import Footer from '../footer/footer';
import CommentForm from '../comment/comment_form_container';
import LikeButton from '../like/like_button_container';
import { deleteComment } from '../../actions/photo_actions.js';
import CommentList from '../comment/comment_list_container';
import PhotoUploadButton from '../photo_upload/photo_upload_button_container';

class PhotoIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = {doubleClicked: false};
  }


  componentDidMount(){
    this.props.requestAllPhotos();
  }

  commentList (photo){
    return (
      <ul className='comment-list'>
      {photo.comments.map(comment => {
        return(
          <CommentList photoId={photo.id} com={comment} photoAuthorId={photo.user_id}/>
        );
      })}
      </ul>
    );
  }

  handleDoubleClick(photo){
    if(!photo.viewer_liked){
      this.props.createLike({photo_id: photo.id});
      this.setState({doubleClicked: true});
      // window.setTimeOut(this.setState({doubleClicked: false}, 1000));
    } else {
      this.props.deleteLike({id: photo.viewer_like_id, photo_id: photo.id});
    }
  }


  render () {
    return(
      <div>
        <Header/>
        <section className='photo-index'>
          <div className="photo-index-div">
            <ul>
              {this.props.photos.map(photo =>{
                return (
                  <li className= "photo-item-li">
                    <article className='photo-item-article'>
                      <header className='photo-item-header'>
                        <div className='avatar-container'>
                          <Link to={`/users/${photo.user_id}`} className='author-name'> <img className='avatar-image' src={photo.user_avatar}/></Link>
                          <Link to={`/users/${photo.user_id}`} className='author-name'> {photo.username}</Link>
                        </div>
                      </header>
                      <div className='photo-item-container' onDoubleClick={() => this.handleDoubleClick(photo)}>
                      {(() => {
                          if(this.state.doubleClicked){
                            return (
                              <div className="image-heart" ref="imageHeart">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                                </svg>
                              </div>
                            );
                          }
                        })()}
                        <img className='image' src={photo.image_url}/>
                      </div>
                      <div className='like-comments-container'>
                        <section className='like-comment-button-container'>
                          <LikeButton photoId={photo.id} liked={photo.viewer_liked} likeId={photo.viewer_like_id}/>
                          <button type="button" className='comment-icon-button' onClick={() => {document.getElementById(`comment-${photo.id}`).focus();}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                            </svg>
                          </button>
                        </section>
                        <section className='num-likes-container'>
                          <div className='num-likes'> {photo.num_likes} likes</div>
                        </section>
                        <div className='comment-div'>
                        <div className='caption-div'>
                          <Link to={`/users/${photo.user_id}`} className='comment-user-name'>{photo.username}</Link>
                          <span className='comment-body'>{photo.caption}</span>
                        </div>
                        </div>
                          {this.commentList(photo)}
                            <Link to={`/photos/${photo.id}`} className='post-time-link' id={photo.id}>
                              <div className='post-time-div'>{photo.time_ago}</div>
                            </Link>
                        <CommentForm photoId={photo.id}/>
                      </div>
                    </article>
                  </li>
                );})}
             </ul>
           </div>
          </section>
          <PhotoUploadButton/>
       </div>

    );
  }
}

export default PhotoIndex;
