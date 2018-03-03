import React from 'react';
import { Route, Link } from 'react-router-dom';

class LikeButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.userId,
      photo_id: this.props.photoId,
      id: this.props.likeId
    };

    this.handleLike = this.handleLike.bind(this);
    this.handleUnLike = this.handleUnLike.bind(this);
  }

  buttonToggle(){

    if (this.props.liked === false){
      return (
        <button className='heart-icon-button' onClick={this.handleLike}>
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      );
    } else {
      return(
        <button className='heart-icon-button' onClick={this.handleUnLike}>
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#EE4957" stroke="#EE4957" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      );
    }
  }

  handleLike(e) {
    e.preventDefault();
    this.props.createLike({photo_id: this.props.photoId});
  }

  handleUnLike(e) {
    e.preventDefault();
    this.props.deleteLike({id: this.props.likeId, photo_id: this.props.photoId});
  }

  render(){

    return(
      <section className='like-button'>
            {this.buttonToggle()}
      </section>
    );
  }
}

export default LikeButton;
