import React from 'react';
import {connect} from 'react-redux';
import {login, signup} from '../../actions/session_actions';
import { Link }  from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      username: '',
      password: '',
      errors: ''
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
    this.props.processForm({user});
  }

  errorText () {
    if (this.props.errors){
      return (
        <ul>{this.props.errors.map(error => {
        return (<li>{error}</li>);
      })}</ul>
      );
    }
  }

  linkToggle () {
    if (this.props.formType === 'login'){
      return (
        <p>Don't have an account? <Link
        className ='link-toggle-link'
        onClick={this.props.clearErrors}
        to="/signup">Sign Up</Link></p>
      );
    } else {
      return (
        <p>Have an account? <Link
        className='link-toggle-link'
        onClick={this.props.clearErrors}
        to="/login">Log In</Link></p>
      );
    }
  }

  render() {
  const buttonText = this.props.formType === 'login' ? 'Log In' : 'Sign Up';
   return (
     <article className="welcome">
      <div className="welcome-img">
       <img src='assets/welcome.png'/>
      </div>
      <div className='form-div'>
       <div className="form-holder">
         <h1>InfiPx</h1>
          <div className='form-box'>
            <form onSubmit={this.handleSubmit} className='form'>
              <div className='username'>
                <input className='input-field'
                  onChange={this.update("username")}
                  value={this.state.username}
                  placeholder='Username'/>
                  <div className='username-dummy'/>
               </div>
               <div className='password'>
                <input className='input-field'
                  onChange={this.update("password")}
                  value={this.state.password}
                  type="password"
                  placeholder='Password'/>
                  <div className='password-dummy'/>
               </div>
              <span className='buttonspan'>
                <button className='button'>{buttonText}</button>
              </span>
                <div className='or-div'>
                  <div className='or-line'/>
                  <div className='or-text'>or</div>
                  <div className='or-line'/>
                </div>
              <span className='option-login'>
                <button className='option-login-button'>
                  <span className='option-login-text'><i className="fa fa-facebook-official fa-lg" aria-hidden="true">
                  </i> Log in with Demo Account</span>
                </button>
              </span>
              <div className='error-text'>{this.errorText()}</div>
            </form>
           </div>
          </div>
          <div className='link-toggle-div'>
            <div className='link-toggle-text'>{this.linkToggle()}</div>
          </div>
        </div>
      </article>
    );
  }
}



export default SessionForm;
