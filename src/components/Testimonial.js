"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
      name: "Micheal Gough",
      title: "CEO at Google",
    },
    {
      quote:
        "Incredible value for money. The flexibility and capability of this service far exceeded my expectations. Definitely recommend for any startup looking to kickstart their project.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jane-doe.png",
      name: "Jane Doe",
      title: "CTO at StartupXYZ",
    },
    {
      quote:
        "A fantastic tool for designers and developers alike. It's made our workflow much more efficient, and the ease of use is unparalleled.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/john-smith.png",
      name: "John Smith",
      title: "Lead Designer at Creatives Inc.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <section className="bg-white mt-6 mb-12">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <h2 className="text-3xl text-gray-900 mb-8 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="max-w-screen-md mx-auto">
              {/* ... SVG and Blockquote as in your existing code ... */}
              <blockquote>
                <p className="text-xl text-gray-800">
                  {testimonial.quote}
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <Image
                  width={40}
                  height={40}
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500">
                    {testimonial.title}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
