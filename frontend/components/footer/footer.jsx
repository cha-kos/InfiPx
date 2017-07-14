import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return(
      <footer className='footer'>
        <div className='footer-div'>
          <nav className='footer-nav'>
            <ul className='footer-ul'>
              <li><a href='http://chrishakos.com' >Portfolio</a></li>
              <li><a href='https://github.com/chrishakos' >Github</a></li>
              <li><a href="mailto:chrishakos@gmail.com">Contact</a></li>
            </ul>
            <span className="footer-span">© 2017 InfiPx</span>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
