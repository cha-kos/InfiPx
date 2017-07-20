import React from 'react';
import { Route, Link } from 'react-router-dom';


class CommentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      body: this.props.body,
      user_id: this.props.userId,
      photo_id: this.props.photoId,
      username: this.props.username
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state).then(() => this.setState({
      body: ''
    }));
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render(){

    return(
      <section className='comment-form-container'>
        <form  onSubmit={this.handleSubmit} className='comment-form'>
          <div className='body'>
            <input id={`comment-${this.state.photo_id}`}
              className="comment-form-body"
              placeholder='Add a comment...'
              type="text"
              value={this.state.body}
              onChange={this.update("body")}/>
          </div>
        </form>
      </section>
    );
  }
}

export default CommentForm;
// <div>
// <button>Submit</button>
// </div>
