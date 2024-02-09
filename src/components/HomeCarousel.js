// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HomeCarousel.css';
import Header from './Header';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeCarousel() {
  return (
    <div class='HomeHeader'>
        
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='background background1'>
          <div className='parent-home'>
          <div class='home-para'>
          <p>Two <b>souls</b> with but a single thought; two <b>hearts</b> that beat as <b>One</b>.</p>
          </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='background background2'>
            <div className='parent-home'>
            <div class='home-para'>
          <p>Two <b>souls</b> with but a single thought; two <b>hearts</b> that beat as <b>One</b>.</p>
          </div>
          </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='background background3'>
            <div className='parent-home'>
            <div class='home-para'>
          <p>Two <b>souls</b> with but a single thought; two <b>hearts</b> that beat as <b>One</b>.</p>
          </div>
          </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='background background4'>
            <div className='parent-home'>
            <div class='home-para'>
          <p>Two <b>souls</b> with but a single thought; two <b>hearts</b> that beat as <b>One</b>.</p>
          </div>
          </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='background background5'>
            <div className='parent-home'>
            <div class='home-para'>
          <p>Two <b>souls</b> with but a single thought; two <b>hearts</b> that beat as <b>One</b>.</p>
          </div>
          </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='background background6'>
            <div className='parent-home'>
            <div class='home-para'>
          <p>Two <b>souls</b> with but a single thought; two <b>hearts</b> that beat as <b>One</b>.</p>
          </div>
          </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
 