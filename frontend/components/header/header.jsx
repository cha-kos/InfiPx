import React from 'react';
import { Link }  from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import PhotoIndex from '../photo/photo_index_container';
import Footer from '../footer/footer';

const Header = function({currentUser, logout}) {
  // function greet() {
  //   return `What does it! ${currentUser ? `, ${currentUser.username}` : '' }!`;
  // }

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
  const userPath = `users/${currentUser.id}`;
  // debugger
  return (
    <div>
    <div className='header'>
      <div className='content-wrap'>
        <div className='left-nav-wrap'>
        <Link className='left-nav-link' to="/">
          <div className="insta-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
          </svg>
          </div>
          <div className="left-nav-text">InfiPx</div>
        </Link>
        </div>
        <section className="search-wrap">
          <button onClick={logout}>
            Logout
          </button>
        </section>
        <div className='right-nav-wrap'>
          <div className='right-icon-wrap'>
            <div className='compass-icon-div'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
              </svg>
            </div>
            <div className='heart-icon-div'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <div className='profile-icon-div'>
            <Link to={userPath}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <circle cx="12" cy="7" r="4" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
              </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;

// <header className="my-header">
// <Link to="/feed">{greet()}</Link>
// <Link to="/">InfiPx</Link>
// <img src={currentUser.avatar_url}/>
// {thingsToShow()}
// </header>

// <div className='search-wrap'>
//   <input type="text" className="search_input" placeholder="Search"/>
// </div>

//
// <div className="search-mask">
//   <div className="search-mask-content">
//     <span className="search-mask-icon">
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="10.5" cy="10.5" r="7.5"/>
//           <line x1="21" y1="21" x2="15.8" y2="15.8"/>
//       </svg>
//     </span>
//     <span className="search-mask-text">Search
//     </span>
//   </div>
// </div>
