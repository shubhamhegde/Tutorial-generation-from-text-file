import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Tutorial Generation
            </Link>
          </div>
          <div class='social-icons'>
            <a
              className='social-logo'
              href='https://www.pes.edu/'
            >
            PES University
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;