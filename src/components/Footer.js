import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer1'>
        <div className='matter0'>
          <div className='image7'></div>
          <div class="footer-parent">
          <FontAwesomeIcon icon={['fab', 'apple']} />
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      <FontAwesomeIcon icon={['fab', 'google']} />
             <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
             <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
             <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
             <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </div>
        </div>
        <div className='matter1'>
          <p>Ria's Dreamz Odyssey is a boutique event planning firm dedicated to creating unique and personalized weddings and events.
          From intimate gatherings to lavish celebrations, we are committed to making every event a dream come true.</p>
        </div>
        <div className='matter2'>
          <a href="#">Our Story</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact Us</a>
        </div>
        <div className='matter3'>
          <p>Phone: +91 93469 36559</p>
          <p>Address: Flat No 503, MK Towers, North Extension, Balayya Sastri Layout, Seethammadara, Visakhapatnam, Andhra Pradesh 530013</p>
          <p>Mail: letstalk@riasdo.com</p>
        </div>
      </div>
      <div className='copyrights'>©2024 Ria’s Dreamz Odyssey</div>
    </div>
  )
}

export default Footer