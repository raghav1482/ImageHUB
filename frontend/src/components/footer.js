import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <h4>ImageHUB</h4>
      <div className='footer-content'>
        <div className='footer-links'>
          <h5>Social Links</h5>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className='footer-links'>
          <h5>Navigation</h5>
          <ul>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/upload">Upload</a></li>
            <li><a href="/login">Login/SignUP</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
