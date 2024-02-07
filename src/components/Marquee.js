import React from 'react';
import Marquee from 'react-fast-marquee';
import './Marquee.css';

function Marquee1() {
  return (
    <div>
        <Marquee
        className='marquee'>
            <div className='spacing-marquee'>Home</div>
            <div className='spacing-marquee'>About Us</div>
            <div className='spacing-marquee'>Service</div>
            <div className='spacing-marquee'>Portfolio</div>
            <div className='spacing-marquee'>Testimonials</div>
            <div className='spacing-marquee'>Blog</div>
            <div className='spacing-marquee'>Contact Us</div>
        </Marquee>
    </div>
  )
}

export default Marquee1;