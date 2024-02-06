"use client";
import React from "react";
import { GiFlatTire } from "react-icons/gi";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};
const tireCount = 7;
const tires = Array(tireCount).fill(0); 


const Partner = () => {
  return (
    <div className="bg-white py-6">
      <div className="text-center text-3xl text-gray-900 font-semibold uppercase mb-4">
        Partners We Work With
      </div>
      <div>
      <Slider {...settings}>
      {tires.map((_, index) => (
        <GiFlatTire key={index} size={50} />
      ))}
    </Slider>
      </div>
    </div>
  );
};

export default Partner;
