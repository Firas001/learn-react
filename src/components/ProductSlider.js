import React from "react";
// import link
import { Link } from "react-router-dom";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
// import required modules
import { Navigation, Pagination } from "swiper";
// import data
import { products } from "../contexts/ProductContext";

// import card
import Card from "./Card";

const page1 = products.slice(0, 10).map((card) => {
  return (
    <Card
      key={card.id}
      id={card.id}
      image={card.image}
      name={card.name}
      price={card.price}
      oldPrice={card.oldPrice}
      details={card.details}
    />
  );
});

const page2 = products.slice(10, 21).map((card) => {
  return (
    <Card
      key={card.id}
      id={card.id}
      image={card.image}
      name={card.name}
      price={card.price}
      oldPrice={card.oldPrice}
      details={card.details}
    />
  );
});

const ProductSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="productSlider min-h-[1300px]"
    >
      <SwiperSlide key="1">
        <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">
          {page1}
        </div>
      </SwiperSlide>
      <SwiperSlide key="2">
        <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">
          {page2}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSlider;
