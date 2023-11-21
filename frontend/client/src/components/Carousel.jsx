/* eslint-disable quotes */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { BgCarrousel, CocaChica, PizzaCalabresa, BgCarrousel2, BgCarrousel3, Logo, Cerveza, Pizza4Quesos, Empanadas } from "../assets";

// Import Swiper styles

import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel() {
  const progressContent = useRef(null);

  const promos = [
    {
      id: 1,
      bgimage: BgCarrousel,
      img1: PizzaCalabresa,
      img2: CocaChica,
      title: "PROMO del día",
      subtitle: "Pizza calabresa + Coca de litro",
      price: "$2499",
    },
    {
      id: 2,
      bgimage: BgCarrousel2,
      img1: Pizza4Quesos,
      img2: Cerveza,
      title: "PROMO 2",
      subtitle: "Pizza Cuatro Quesos + IPA 1lt",
      price: "$2999",
    },
    {
      id: 3,
      bgimage: BgCarrousel3,
      img1: Empanadas,
      img2: Cerveza,
      title: "PROMO 3",
      subtitle: "Docena de empandas + IPA 1lt.",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className="justify-center items-center sm:w-[805px] sm:h-[230px] my-12 bg-orange-500 rounded-3xl border-orange-700 border-2"
    >
      {promos.map(({ id, title, subtitle, bgimage, img1, img2, price }) => (
        <SwiperSlide className="flex h-[1024]" key={id}>
          <div className="w-2/3 flex flex-col items-center justify-center translate-x-4" style={{ bgimage }}>
            <h1 className="text-4xl mt-10 ml-10 font-lato font-medium  leading-10 text-black font-lato">
              {title}
            </h1>
            <h2 className="text-xl ml-10 font-lato font-medium leading-10 text-black font-display">{subtitle}</h2>
            <h1 className="font-extrabold text-white text-4xl">{price}</h1>
            {/* Botón LO QUIERO */}
            <button
              type="submit"
              className="text-black font-display text-xl font-semibold bg-white px-6 py-3 my-6 mb-10 mx-auto rounded-2xl shadow-md hover:scale-110 duration-200 flex flex-col items-start justify-center"
            >
              Lo quiero!
            </button>
          </div>
          {/* Imágen LOGO */}
          <div className="absolute transform translate-y-28 w-28">
            <img src={Logo} alt="logo" />
          </div>

          {/* Imágenes pizza y coca */}
          <div className="flex flex-row -translate-x-10">
            <img src={img1} alt="pizza" className="w-80 h-80 -translate-y-10 translate-x-12" />
            <img src={img2} alt="bebida" className="w-64 h-64 -translate-y-3 -translate-x-4" />
          </div>
        </SwiperSlide>
      ))}

      <div className="autoplay-progress" slot="container-end">
        <span ref={progressContent} />
      </div>
    </Swiper>
  );
}
