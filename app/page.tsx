'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Parallax } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import SliderContent from '@/components/SliderContent';
import Header from '@/components/Header';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/img/slides/slide1.jpg',
      title: 'MADEIRA',
      description:
        'Madeira, a Portuguese island in the Atlantic Ocean, is known for its breathtaking landscapes, lush forests, and vibrant culture. A paradise for nature lovers and adventure seekers!',
    },
    {
      id: 2,
      image: '/img/slides/slide2.jpg',
      title: 'Discover',
      description:
        'Madeira offers stunning mountain trails, scenic coastal views, and a mild climate year-round, making it a perfect travel destination.',
    },
    {
      id: 3,
      image: '/img/slides/slide3.jpg',
      title: 'Nature',
      description:
        'The island is home to the UNESCO-listed Laurisilva forest, rich in biodiversity and offering unique hiking experiences through ancient woodlands.',
    },
  ];

  return (
    <div className="swiper slider">
      <div className="slider-ui">
        <div className="container header-wrapper">
          <Header />
          <SliderContent slides={slides} activeIndex={activeIndex} />
          <div className="header-bottom"></div>
        </div>
      </div>

      <Swiper
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        modules={[Mousewheel, Parallax]}
        direction="vertical"
        speed={1700}
        parallax={true}
        mousewheel={true}
        className="slider-swiper">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="slider__item">
            <div
              className="slider__layer"
              data-swiper-parallax="35%"
              style={{ backgroundImage: `url(${slide.image})` }}></div>
            <div
              className="slider__layer"
              data-swiper-parallax="25%"
              style={{ backgroundImage: `url(${slide.image})` }}></div>
            <div
              className="slider__layer"
              data-swiper-parallax="14%"
              style={{ backgroundImage: `url(${slide.image})` }}></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
