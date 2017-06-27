import React from 'react';
import {connect} from 'react-redux';
import {login, signup} from '../../actions/session_actions';
import { Link }  from 'react-router-dom';



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      full_name: this.props.currentUser.full_name,
      username: this.props.currentUser.username,
      bio: this.props.currentUser.bio,
      id: this.props.currentUser.id,
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
    this.props.editUser({user}).then( () => this.props.history.push(`/users/${this.state.id}`));
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
      <div className='form-div'>
       <div className="form-holder">
         <h1>Edit Profile</h1>
          <div className='form-box'>
            <form onSubmit={this.handleSubmit} className='form'>
              <div className='username'>
              <label id='Name'>Name</label>
                <input id='Name'
                  className='input-field'
                  onChange={this.update("full_name")}
                  value={this.state.full_name}/>
                  <div className='username-dummy'/>
               </div>
              <div className='username'>
              <label id='Username'>Username</label>
                <input id='Username'
                  className='input-field'
                  onChange={this.update("username")}
                  value={this.state.username}
                  placeholder='Username'/>
                  <div className='username-dummy'/>
               </div>
               <div className='bio'>
               <label id='Bio'>Bio</label>
                <textarea id = 'Bio'
                  className='text-field'
                  onChange={this.update("bio")}
                  value={this.state.bio}
                  type="password" />
                  <div className='bio-dummy'/>
               </div>
              <span className='buttonspan'>
                <button className='button'>Submit</button>
              </span>
              {this.errorText()}
            </form>
           </div>
          </div>
        </div>
      </article>
    );
  }
}


//
// linkToggle () {
//   if (this.props.formType === 'login'){
//     return (
//       <p>Don't have an account? <Link
//       className ='link-toggle-link'
//       onClick={this.props.clearErrors}
//       to="/signup">Sign Up</Link></p>
//     );
//   } else {
//     return (
//       <p>Have an account? <Link
//       className='link-toggle-link'
//       onClick={this.props.clearErrors}
//       to="/login">Log In</Link></p>
//     );
//   }
// }

export default SessionForm;
