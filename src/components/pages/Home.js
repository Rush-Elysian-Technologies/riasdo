import React from 'react';
import './Home.css';
import ServiceCarousel from '../ServiceCarousel';
import HomeCarousel from '../HomeCarousel';
import { Link } from 'react-router-dom';
import PortfolioCarousel from '../PortfolioCarousel';
import CusTestimonials from '../CusTestimonials';
import Header1 from '../Header1';

function Home() {
  return (
    <>
    <Header1/>
    <HomeCarousel/>
    <div className='service'>
      <h3>Our Services</h3>
      <p>Our services are as distinctive as your vision. We meticulously tailor every aspect to align with your specific requirements, whether it's comprehensive wedding planning and design or cozy gatherings and parties. Your event, precisely as you envision it.</p>
    </div>
    <ServiceCarousel/>
    <div class="button">
       <Link className="button1" to="#">View more</Link>
    </div>
    <div className='PortfolioExplore'>
    <PortfolioCarousel/>
    <div className='EPortfolio'>
      <h4>Explore</h4>
      <h3>Portfolio</h3>
      <p>Dive into our portfolio and discover how we turn dreams into cherished memories, one breathtaking celebration at a time.</p>
      <div class="button">
       <Link className="button1" to="#">View more</Link>
      </div>
    </div>
    </div>
    <div className='CTestimonials'>
        <div className='HTestimonials1'>
           <p>Peruse <b>Testimonials</b>  from our Customers</p>
           <CusTestimonials/>
           <h3>- Devdas & Paru</h3>
           <div class="button">
               <Link className="button1" to="#">View more</Link>
           </div>
        </div>
    </div>
    <div className='FounderDire'> 
       <div className='founderMatter'>
        <h4>Beneath the <b>Brilliance:</b></h4>
        <p>A Glimpse into the Vision Behind Ria’s DreamzOdyssey</p>
        <p>Led by Godaba Asha Sravani, Ria's Dreamz Odyssey began its journey in 2014 with a commitment to crafting extraordinary weddings and events. We take pride in our close collaboration with clients, ensuring that every celebration is tailored to their unique preferences and desires.</p>
        <p>At Ria's Dreamz Odyssey, our mission is to design weddings that reflect your vision, style, and personality, resulting in memories that you and your loved ones will treasure forever. With a meticulous attention to detail and a profound love for the beauty of each moment, we strive to alleviate the stress of event planning and transform your special day into an unforgettable experience. From the initial consultation to the final dance, we are dedicated to bringing your dream celebration to life.</p>
        <p>Let us embark on this remarkable journey together. Your extraordinary event begins here, with us, at Ria's Dreamz Odyssey .</p>
        <hr></hr>
        <h2>Asha Sravani Patnaik Godaba</h2>
         <h3>Founder & Director</h3>
       </div>
       <div className='TeamPhotos'>
        <div>
          <div className='TeamSet1'>
            <div className='photo photo1'></div>
            <div className='photo photo2'></div>
          </div>
        </div>
        <div className='align2'>
        <div className='TeamSet2'>
           <div className='photo photo3'></div>
           <div className='photo photo4'></div>
        </div>
        </div>
       </div>
    </div>
    
    </>
  )
}

export default Home