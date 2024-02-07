import React from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './ServiceCarousel.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function ServiceCarousel() {
  return (
    <div className='width'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='img img1'>
            <div>
            <p>Prospect Venues</p>
            <hr className='underline'></hr>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img img2'>
          <div>
          <p>Menu Planning</p>
          <hr className='underline'></hr>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img img3'>
          <div>
          <p>Styling & grooming</p>
          <hr className='underline'></hr>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img img1'>
          <div>
        <p>Prospect Venues</p>
        <hr className='underline'></hr>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='img img2'>
            <div>
          <p>Prospect Venues</p>
          <hr className='underline'></hr>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img img3'>
          <div>
        <p>Prospect Venues</p>
        <hr className='underline'></hr>
        </div>
        </div>
        </SwiperSlide>
      </Swiper>

      
    </div>
  );
}


