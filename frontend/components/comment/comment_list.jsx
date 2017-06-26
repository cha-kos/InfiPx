import React from 'react';
import { Route, Link } from 'react-router-dom';

class CommentList extends React.Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    this.props.deleteComment({id: this.props.comment.id, photo_id: this.props.photoId});
  }

  render() {
        return(
          <li>{this.props.comment.username}: {this.props.comment.body}
            <button onClick={this.handleClick}>Delete Comment</button>
          </li>
        );
  }
}

export default CommentList;
