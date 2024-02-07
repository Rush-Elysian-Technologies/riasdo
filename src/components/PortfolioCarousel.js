import React from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './PortfolioCarousel.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function PortfolioCarousel() {
  return (
    <div className='width1'>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='img img4'>
            <div>
            <p>Asha & Ragha</p>
            <hr className='underline'></hr>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img img5'>
          <div>
          <p>Priya & Srinu</p>
          <hr className='underline'></hr>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img img4'>
          <div>
          <p>Asha & Ragha</p>
          <hr className='underline'></hr>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img img5'>
          <div>
        <p>Priya & Srinu</p>
        <hr className='underline'></hr>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>

      
    </div>
  );
}


