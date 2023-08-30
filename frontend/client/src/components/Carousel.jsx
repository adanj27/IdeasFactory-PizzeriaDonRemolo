import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {
  CocaChica, PizzaCalabresa, PizzaFaina, PizzaFugazzeta, PizzaPalmitos,
} from '../assets';

// Import Swiper styles

import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Carousel() {
  const progressContent = useRef(null);

  const promos = [
    {
      img1: PizzaCalabresa,
      img2: CocaChica,
      title: 'PROMO 1',
      subtitle: 'CALABRESA + COCA',
      description: 'Llevate una pizza grande de Calabresa y una coca',
      price: '$2300',
    },
    {
      img1: PizzaFugazzeta,
      img2: PizzaPalmitos,
      title: 'PROMO 2',
      subtitle: 'PIZZA FUGAZZETA + PIZZA PALMITOS',
      description: 'Llevate dos pizzas grandes de fugazzeta y palmitos',
      price: '$4000',
    },
    {
      img1: PizzaCalabresa,
      img2: PizzaFaina,
      title: 'PROMO 3',
      subtitle: 'ESPECIAL DEL DIA',
      description: 'Solo por hoy llevate una pizza de calabresa y un fainá a un precio único!',
      price: '$3000',
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      /* autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }} */
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className="flex justify-center items-center w-3/4 h-full lg:w-[1128px] mx-auto my-20 bg-[#9C4235] rounded-3xl"
    >
      {promos.map(({
        title, subtitle, description, img1, img2, price,
      }) => (
        <SwiperSlide key={title}>
          <div className="w-[45%]">
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
          </div>

          <div className="flex w-[45%] gap-4 px-4 py-4 h-[200px]">
            <img src={img1} alt="pizza" className="rounded-3xl" />
            <img src={img2} alt="bebida" className="rounded-3xl" />
          </div>

          <button
            type="submit"
            className="text-black bg-white px-6 py-3 my-8 mx-auto flex items-start rounded-md hover:scale-110 duration-300"
          >
            Lo quiero!
          </button>
        </SwiperSlide>
      ))}

      <div className="autoplay-progress" slot="container-end">
        <span ref={progressContent} />
      </div>
    </Swiper>
  );
}
