import React from 'react';
import { Route, Link } from 'react-router-dom';
// import { createLike } from '../../actions/photo_actions';

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
        <button onClick={this.handleLike}>Like</button>
      );
    } else {
      return(
        <button onClick={this.handleUnLike}>Unlike</button>
      );
    }
  }

  handleLike(e) {
    e.preventDefault();
    this.props.createLike(this.state);
  }

  handleUnLike(e) {
    e.preventDefault();
    this.props.deleteLike({id: this.props.likeId, photo_id: this.props.photoId});
  }

  // update(property) {
  //   return e => this.setState({ [property]: e.target.value });
  // }

  render(){

    return(
      <section className='like-button'>
            {this.buttonToggle()}
      </section>
    );
  }
}

export default LikeButton;


// <form  onSubmit={this.handleSubmit} className='post-form-container'>
// <div className='body'>
// <input
// className="form-body"
// placeholder='Add Like'
// type="text"
// value={this.state.body}
// onChange={this.update("body")}/>
// </div>
// <div>
// </div>
// </form>
