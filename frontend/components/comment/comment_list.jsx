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
      return(<div className='delete-button-div' onClick={this.handleClick}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="18" y1="6" x2="6" y2="18"/>
                 <line x1="6" y1="6" x2="18" y2="18"/>
               </svg>
             </div>);
    } else if (this.props.currentUser.id === this.props.photoAuthorId){
      return(<div className='delete-button-div' onClick={this.handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="gray" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
             </div>);
    }
  }



  handleClick(e) {

    this.props.deleteComment({id: this.props.comment.id, photo_id: this.props.photoId});
  }

  render() {
        return(
          <li className='comment-list-item'>
            <div className='comment-div'>
            <Link to={`/users/${this.props.comment.user_id}`} className='comment-user-name'>{this.props.comment.username}</Link>
            <span className='comment-body'>{this.props.comment.body}</span>
            </div>
            {this.deleteButton()}
          </li>
        );
  }
}

export default CommentList;
