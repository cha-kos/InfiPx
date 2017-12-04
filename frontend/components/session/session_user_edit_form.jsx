import React from 'react';
import {connect} from 'react-redux';
import {login, signup} from '../../actions/session_actions';
import { Link }  from 'react-router-dom';
import Header from '../header/header_container';



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      full_name: this.props.currentUser.full_name,
      username: this.props.currentUser.username,
      bio: this.props.currentUser.bio,
      id: this.props.currentUser.id,
      avatar_url: this.props.currentUser.avatar_url,
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.editUser(user)
      .then( () => this.props.history.push(`/users/${this.state.id}`));
  }

  errorText () {
    if (this.props.errors.length !== 0){
      return (
        <div className='error-text'>
          <ul>{this.props.errors.map(error => {
            return (<li>{error}</li>);
            })}
          </ul>
        </div>
      );
    }
  }

  render() {

   return (
     <article>
     <Header/>
     <div className='edit-form-body'>
      <div className='edit-form-div'>
       <div className="form-holder edit">
       <div className='edit-text-holder'>
         <div className='edit-profile-text'>Edit Profile</div>
         </div>
          <div className='edit-form-box'>
          <div className='edit-avatar-username'>
          <div className='edit-avatar-div'>
            <img src={this.state.avatar_url} />
          </div>
          <div className= 'info-div'>
            <div className = 'edit-username-and-button'>
              <h1 className='username'>{this.state.username}</h1>
            </div>
            </div>
            </div>
            <form onSubmit={this.handleSubmit} className='form edit-form'>
              <div className='edit-form-item'>
              <div className='edit-form-labels'>
                <label id='Name'>Name</label>
                <label id='Username'>Username</label>
                <label id='Bio'>Bio</label>
              </div>
              <div className='edit-form-fields'>
                <div className= 'edit-input-div'>
                <input id='Name'
                  className='edit-input-field'
                  onChange={this.update("full_name")}
                  value={this.state.full_name}/>
                </div>
                <div className= 'edit-input-div'>
                <input id='Username'
                  className='edit-input-field'
                  onChange={this.update("username")}
                  value={this.state.username}
                  placeholder='Username'/>
                </div>
                <div className= 'edit-input-div'>
                <textarea id = 'Bio'
                  className='edit-text-area'
                  onChange={this.update("bio")}
                  value={this.state.bio}
                  type="password" />
                </div>
                  <span className='edit-buttonspan'>
                  <button className='button'>Submit</button>
                  </span>
                  </div>
               </div>
              {this.errorText()}
            </form>
           </div>
          </div>
        </div>
        </div>
      </article>
    );
  }
}



export default SessionForm;
