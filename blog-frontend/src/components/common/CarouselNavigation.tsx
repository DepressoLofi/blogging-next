import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function CarouselNavigation() {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} loop autoplay={{ delay: 3000, disableOnInteraction: false }} >
      <SwiperSlide>
        <img src="/HomeSlider/sliderOne.jpg" alt="Slide 1" className="w-full h-[600px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/HomeSlider/sliderTwo.jpg" alt="Slide 2" className="w-full h-[600px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/HomeSlider/sliderThree.jpg" alt="Slide 3" className="w-full h-[600px]" />
      </SwiperSlide>
    </Swiper>
  );
};

