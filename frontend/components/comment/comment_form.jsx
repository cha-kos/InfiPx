import React from 'react';
import { Route, Link } from 'react-router-dom';
import { createComment } from '../../actions/photo_actions';

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
      <section className='post-form'>
        <form  onSubmit={this.handleSubmit} className='post-form-container'>
          <div className='body'>
            <input
              className="form-body"
              placeholder='Add Comment'
              type="text"
              value={this.state.body}
              onChange={this.update("body")}/>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </section>
    );
  }
}

export default CommentForm;
