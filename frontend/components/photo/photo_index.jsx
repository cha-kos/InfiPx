import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header_container';
import Footer from '../footer/footer';
import CommentForm from '../comment/comment_form_container';

class PhotoIndex extends React.Component{


  componentDidMount(){
    this.props.requestAllPhotos();
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
                  <ul>
                  {photo.comments.map(comment => {
                    return(
                      <li>{comment.username}: {comment.body}</li>
                    );
                  })}
                  </ul>
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
