import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return(
      <footer className='footer'>
        <div className='footer-div'>
          <nav className='footer-nav'>
            <ul className='footer-ul'>
              <li><Link to='/' >Portfolio</Link></li>
              <li><Link to='/' >Github</Link></li>
              <li><Link to='/' >Contact</Link></li>
            </ul>
            <span className="footer-span">© 2017 InfiPx</span>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
