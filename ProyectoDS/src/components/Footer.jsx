import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
 return (
    <footer className="footer">
        <div className="social-media">
        <p>Follow us in our socials</p>
      <ul className="social-media-list">
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M16.5 7.5l0 .01" />
</svg></a></li>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg></a></li>
        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
</svg></a></li>
      </ul>
      </div>
    </footer>
 );
};

export default Footer;