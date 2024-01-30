import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './CusTestimonials.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function CusTestimonials() {
  return (
    <div className='width3'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <p>
            "Choosing ABC Wedding Events was the best decision we made for our big day! From the initial consultation to the final dance, they were with us every step of the way, ensuring that every detail was perfect. Their team's creativity, professionalism, and dedication made our wedding day truly magical. We were blown away by how they brought our vision to life and made it even better than we could have imagined. Our guests are still talking about how amazing everything was, and we owe it all to the incredible team at ABC Wedding Events. Thank you for making our dreams come true!"
            </p>
        </SwiperSlide>
        <SwiperSlide>
            <p>
            "Choosing ABC Wedding Events was the best decision we made for our big day! From the initial consultation to the final dance, they were with us every step of the way, ensuring that every detail was perfect. Their team's creativity, professionalism, and dedication made our wedding day truly magical. We were blown away by how they brought our vision to life and made it even better than we could have imagined. Our guests are still talking about how amazing everything was, and we owe it all to the incredible team at ABC Wedding Events. Thank you for making our dreams come true!"
            </p>
        </SwiperSlide>
        <SwiperSlide>
            <p>
            "Choosing ABC Wedding Events was the best decision we made for our big day! From the initial consultation to the final dance, they were with us every step of the way, ensuring that every detail was perfect. Their team's creativity, professionalism, and dedication made our wedding day truly magical. We were blown away by how they brought our vision to life and made it even better than we could have imagined. Our guests are still talking about how amazing everything was, and we owe it all to the incredible team at ABC Wedding Events. Thank you for making our dreams come true!"
            </p>
        </SwiperSlide>
        <SwiperSlide>
            <p>
            "Choosing ABC Wedding Events was the best decision we made for our big day! From the initial consultation to the final dance, they were with us every step of the way, ensuring that every detail was perfect. Their team's creativity, professionalism, and dedication made our wedding day truly magical. We were blown away by how they brought our vision to life and made it even better than we could have imagined. Our guests are still talking about how amazing everything was, and we owe it all to the incredible team at ABC Wedding Events. Thank you for making our dreams come true!"
            </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

