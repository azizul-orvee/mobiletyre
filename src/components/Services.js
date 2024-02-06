import React from "react";
import { GiFlatTire } from "react-icons/gi";
import ServiceCard from "./ServiceCard";

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

const Services = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Our services</h2>
          <p className="mt-2 leading-8 tracking-tight text-gray-900">
            Our mobile service allows customers to book online and have Halfords and Halfords Autocentres services brought to you, at any suitable location of your choice.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} title={service.title} icon={service.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
