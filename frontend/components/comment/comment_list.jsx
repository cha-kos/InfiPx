import React from 'react';
import { Route, Link } from 'react-router-dom';

class CommentList extends React.Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  deleteButton(){

    if (this.props.currentUser.id === this.props.comment.user_id){
      return(<button onClick={this.handleClick}>Delete Comment</button>);
    } else if (this.props.currentUser.id === this.props.photoAuthorId){
      return(<button onClick={this.handleClick}>Delete Comment</button>);
    }
  }



  handleClick(e) {

    this.props.deleteComment({id: this.props.comment.id, photo_id: this.props.photoId});
  }

  render() {
        return(
          <li>{this.props.comment.username}: {this.props.comment.body}
            {this.deleteButton()}
          </li>
        );
  }
}

export default CommentList;
