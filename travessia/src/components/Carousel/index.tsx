import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';
import { HStack, Text } from '@chakra-ui/react';
import { Chevron } from 'components/Chevron/chevron';
import React, { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './style.module.scss';

SwiperCore.use([Navigation, A11y]);

export function Carousel({ children, title }: { children: ReactNode; title: string }) {
  return (
    <>
      <HStack spacing="xs" mb="md">
        <div>
          <Text textStyle="body1" color="neutral.gray.darkest">
            {title}
          </Text>
        </div>
        <HStack spacing="0">
          <Chevron id="prev-element-button" aria-label="Voltar página do slide" direction="left" />
          <Chevron id="next-element-button" aria-label="Próxima página do slide" direction="right" />
        </HStack>
      </HStack>
      <Swiper
        spaceBetween={32}
        slidesPerView="auto"
        style={{ width: '100%' }}
        navigation={{ nextEl: '#next-element-button', prevEl: '#prev-element-button' }}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide slot="container-start" style={{ width: '326px' }}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export function CourseCarousel({ name, children, marginLeft }: { name: string; children: ReactNode; marginLeft?: string }) {
    return (
      <div className={s.main}>
        <button
          type="button"
          id={`prev-element-button-${name}`}
          aria-label="Voltar página do slide"
          className={s['chevron-left']}
        >
          <Arrow />
        </button>
        <button
          type="button"
          id={`next-element-button-${name}`}
          aria-label="Próxima página do slide"
          className={s['chevron-right']}
        >
          <Arrow />
        </button>
  
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          className={s.swiper}
          style={{ marginLeft: marginLeft ?? '60px' }}
          navigation={{ nextEl: `#next-element-button-${name}`, prevEl: `#prev-element-button-${name}` }}
        >
          {React.Children.map(children, (child) => (
            <SwiperSlide slot="container-start" style={{ width: 'max-content' }}>
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  