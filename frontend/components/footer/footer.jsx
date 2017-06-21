import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <footer className='footer'>
        <div className='footer-div'>
          <nav className='footer-nav'>
            <ul className='footer-ul'>
              <li><a href="">Portfolio</a></li>
              <li><a href="">Github</a></li>
              <li><a href="">Contact</a></li>
            </ul>
            <span className="footer-span">© 2017 InfiPx</span>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
