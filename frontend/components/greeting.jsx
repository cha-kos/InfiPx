import React from 'react';
import { Link }  from 'react-router-dom';
import { logout } from '../actions/session_actions';

const Greeting = function({currentUser, logout}) {
  function greet() {
    return `Welcome ${currentUser ? `, ${currentUser.username}` : '' }!`;
  }

  const thingsToShow = () => {
    if (currentUser) {
      return (
        <section className="right-nav">
          <button onClick={logout}>
            Logout
          </button>
        </section>
      );
    } else {
      return (
        <section className="right-nav">
          <Link to="/login">Log In</Link>
           or
          <Link to="/signup">Sign Up</Link>
        </section>
      );
    }
  };

  return (
    <header className="my-header">
      <Link to="/feed">{greet()}</Link>
      <Link to="/">InfiPx</Link>
      {thingsToShow()}
    </header>
  );
};

export default Greeting;
