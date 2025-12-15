// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

 const HomeSlider =() => {
  return (
    <Swiper
      // install Swiper modules
      modules={[ Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      autoplay={{
    delay: 2000,        // 2 sec delay
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  }}
  loop={true}
    >
      <SwiperSlide><img src='Slides/1.png ' alt='' className='h-80 w-full' height={"300px"}/></SwiperSlide>
      <SwiperSlide><img src='Slides/2.png ' alt='' className='h-80 w-full' height={"300px"}/></SwiperSlide>
      <SwiperSlide><img src='Slides/3.png ' alt='' className='h-80 w-full' height={"300px"}/></SwiperSlide>
      <SwiperSlide><img src='Slides/4.png ' alt='' className='h-80 w-full' height={"300px"}/></SwiperSlide>
     
    </Swiper>
  );
};
export default HomeSlider;