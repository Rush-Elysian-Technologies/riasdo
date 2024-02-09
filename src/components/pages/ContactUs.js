import React from 'react';
import './ContactUs.css';
// import Header from '../Header';
// import Header1 from '../Header1'

function ContactUs() {
  return (
    <div>
      {/* <Header1/> */}
      <div className='contactHome backgroundImg'>
      {/* <Header/> */}
      </div>
      <div className='contactbody1'>
        Contact Us
      </div>
      <div className='contactbody2'>
        <div className='image8'></div>
        <div className='contactbox'>
          <h3>Let's discuss</h3>
          <p>Your special occasion</p>
          <input type='text' placeholder='Name' className='contactinput1'></input>
          <input type='text' placeholder='Phone Number' className='contactinput1'></input>
          <input type='text' placeholder='E-Mail' className='contactinput1'></input>
          <input type='text' placeholder='Details' className='contactInput'></input>
          <div>Submit</div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs