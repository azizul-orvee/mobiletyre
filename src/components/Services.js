"use client";
import React from "react";
import { GiFlatTire } from "react-icons/gi";
import ServiceCard from "./ServiceCard";
import Slider from "react-slick";

const servicesData = [
  {
    title: "Mobile Tyre Fitting",
    icon: <GiFlatTire size={100} />,
  },
  {
    title: "Van Tyre Fitting",
    icon: <GiFlatTire size={100} />,
  },
  {
    title: "4x4 Tyre Fitting",
    icon: <GiFlatTire size={100} />,
  },
  {
    title: "Battery Replacement",
    icon: <GiFlatTire size={100} />,
  },
  {
    title: "Breakdown Recovery",
    icon: <GiFlatTire size={100} />,
  },
  {
    title: "Free Putkimara",
    icon: <GiFlatTire size={100} />,
  },
];



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

const isMobile = window.innerWidth <=640;
console.log(isMobile);

const Services = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 font-semibold tracking-wide uppercase">Our services</h2>
          <p className="mt-2 leading-8 tracking-tight text-gray-900">
          Book online with Azanet service and get services in your chosen location at any suitable time.
          </p>
        </div>
        {isMobile ? (
            <div className="mt-2 mb-2 mx-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <Slider {...settings}>
              {servicesData.map((service, index) => (
                <ServiceCard key={index} title={service.title} icon={service.icon} />
              ))}
              </Slider>
            </div>
        ) : (
          <div className="mt-2 mb-2 mx-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} title={service.title} icon={service.icon} />
            ))}
          </div>
        )}
      
      </div>
    </div>
  );
};

export default Services;
