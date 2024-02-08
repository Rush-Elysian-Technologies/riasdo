import React from 'react';
import './Testimonials.css';
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function Testimonials() {
  return (
    <div>
      <div className='testimonialHome backgroundImg'>
        <Header/>
      </div>
      <div className='testimonialbody1'> 
        <p> Testimonials <b>from our cherished clients</b></p>
      </div>
      <div className='testimonialbody2 '>
        <div className='image6'></div>
        <div>
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
           <div class="carousel-inner">
             <div class="carousel-item active">
             <div className='testimonialComments'>
               <h3>Asha & Ragha</h3>
               <p>"Choosing ABC Wedding Events was the best decision we made for our big day! From the initial consultation to the final dance, they were with us every step of the way, ensuring that every detail was perfect. Their team's creativity, professionalism, and dedication made our wedding day truly magical. We were blown away by how they brought our vision to life and made it even better than we could have imagined. Our guests are still talking about how amazing everything was, and we owe it all to the incredible team at ABC Wedding Events. Thank you for making our dreams come true!"</p>
               
             </div> 
             </div>
             <div class="carousel-item">
              <div className='testimonialComments'>
                <h3>Priya & Srinu</h3>
                <p>"Choosing ABC Wedding Events was the best decision we made for our big day! From the initial consultation to the final dance, they were with us every step of the way, ensuring that every detail was perfect. Their team's creativity, professionalism, and dedication made our wedding day truly magical. We were blown away by how they brought our vision to life and made it even better than we could have imagined. Our guests are still talking about how amazing everything was, and we owe it all to the incredible team at ABC Wedding Events. Thank you for making our dreams come true!"</p>
                
              </div>
             </div>
             <div class="carousel-item">
               <div className='testimonialComments'>
                 <h3>Asha & Ragha</h3>
                 <p>"Choosing ABC Wedding Events was the best decision we made for our big day! From the initial consultation to the final dance, they were with us every step of the way, ensuring that every detail was perfect. Their team's creativity, professionalism, and dedication made our wedding day truly magical. We were blown away by how they brought our vision to life and made it even better than we could have imagined. Our guests are still talking about how amazing everything was, and we owe it all to the incredible team at ABC Wedding Events. Thank you for making our dreams come true!"</p>
                 
               </div>
             </div>
             </div>
             <button class="carousel-control-nex testi-button " type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
             
             <span className='testimonial-button'>Next</span>
             </button>
             </div>
             </div>
        {/* <div className='testimonialComments'>
          <h3>Asha & Ragha</h3>
          <p>"Choosing ABC Wedding Events was the best decision we made for our big day! From the initial consultation to the final dance, they were with us every step of the way, ensuring that every detail was perfect. Their team's creativity, professionalism, and dedication made our wedding day truly magical. We were blown away by how they brought our vision to life and made it even better than we could have imagined. Our guests are still talking about how amazing everything was, and we owe it all to the incredible team at ABC Wedding Events. Thank you for making our dreams come true!"</p>
          <div>Next</div>
        </div> */}
      </div>
    </div>
  )
}

export default Testimonials