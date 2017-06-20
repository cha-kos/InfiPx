import React from 'react';
import {connect} from 'react-redux';
import {login, signup} from '../actions/session_actions';
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
        <ul>{this.props.errors}</ul>
      );
    }
  }

  linkToggle () {
    if (this.props.formType === 'login'){
      return (
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      );
    } else {
      return (
        <p>Have an account? <Link to="/login">Log In</Link></p>
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
                <input onChange={this.update("username")}
                  value={this.state.username}
                  placeholder='Username'/>
                <input onChange={this.update("password")}
                  value={this.state.password}
                  type="password"
                  placeholder='Password'
                  />
              {this.errorText()}
              <button>{buttonText}</button>
              {this.linkToggle()}
            </form>
           </div>
          </div>
        </div>
      </article>
    );
  }
}


export default SessionForm;
