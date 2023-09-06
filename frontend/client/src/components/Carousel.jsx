import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CocaChica, PizzaCalabresa } from '../assets';

// Import Swiper styles

import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Carousel() {
  const progressContent = useRef(null);

  const promos = [
    {
      id: 1,
      img1: PizzaCalabresa,
      img2: CocaChica,
      title: 'PROMO 1',
      subtitle: 'MUZZA + COCA',
      description: 'Llevate una pizza grande de muzzarela y una coca de 2.25 lts',
      price: '$100',
    },
    {
      id: 2,
      img1: PizzaCalabresa,
      img2: CocaChica,
      title: 'PROMO 2',
      subtitle: '2 PIZZAS + COCA',
      description: 'Llevate dos pizzas grandes a elección y una coca de 2.25 lts',
      price: '$175',
    },
    {
      id: 3,
      img1: PizzaCalabresa,
      img2: CocaChica,
      title: 'PROMO 3',
      subtitle: 'ESPECIAL DEL DIA',
      description:
        'Solo por hoy llevate una pizza chica de roquefort y una grande de calabresa acompañada de la bebida que quieras!!!',
      price: '$300',
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className="flex justify-center items-center sm:w-[1128px] mx-auto my-20 bg-[#9C4235] rounded-3xl"
    >
      {promos.map(({
        id, title, subtitle, description, img1, img2, price,
      }) => (
        <SwiperSlide className="flex" key={id}>
          <div className="w-1/2">
            <h2 className="flex text-xl mt-10 ml-10 font-lato font-medium items-center text-right leading-10 text-white">
              {title}
            </h2>
            <h1 className="flex text-3xl ml-10 font-lato font-medium items-center text-right leading-10 text-white">
              {subtitle}
            </h1>
            <p className="inline-grid items-center ml-10 font-lato leading-8 font-light text-justify text-white ">
              {description}
            </p>
            <h3 className="flex ml-10 font-extrabold text-white text-4xl">{price}</h3>
            <button type="submit" className="text-black bg-white px-6 py-3 my-8 mx-auto flex items-start rounded-md hover:scale-110 duration-300">
              Lo quiero!
            </button>
          </div>
          <div className="flex items-center">
            <img src={img1} alt="pizza" className="w-96"/>
            <img src={img2} alt="bebida" className="w-60"/>
          </div>
        </SwiperSlide>
      ))}

      <div className="autoplay-progress" slot="container-end">
        <span ref={progressContent} />
      </div>
    </Swiper>
  );
}
