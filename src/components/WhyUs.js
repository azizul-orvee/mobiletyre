'use client';
import Image from "next/image";
import React from "react";
import map from '/public/image/map.jpeg'
import handshake from '/public/image/handshake.jpeg'
import tyrestock from '/public/image/tyrestock.jpeg'



const WhyUs = () => {
  return (
    <section>
      <h2 className="py-10 text-3xl text-center text-gray-900 font-semibold tracking-wide uppercase">
        Why choose us
      </h2>
      <div className="container mx-auto px-10 flex flex-col md:flex-row py-10">
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-2xl transform transition-all hover:scale-102 hover:shadow-2xl">
          <Image
            src={handshake}
            alt="Your Image"
            placeholder="blur"
            width={800}
            height={500}
          />
        </div>
        <div className="md:w-1/2 mx-12 bg-transparent flex justify-center items-center text-center">
          <div>
            <h1 className="text-3xl text-gray-900 font-semibold m-6">
              Our <span className="text-orange-600">Customers</span>  Love Us!
            </h1>
            <p className="text-lg mb-4">
              Our mobile tire fitting service has captured the hearts of
              numerous customers. Benefit from the convenience and
              trustworthiness that our tire solutions offer, becoming part of
              our delighted and loyal customer community.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse py-10">
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-2xl transform transition-all hover:scale-102 hover:shadow-2xl">
          <Image
            src={tyrestock}
            alt="Your Image"
            width={800}
            height={500}
            placeholder="blur"
          />
        </div>
        <div className="md:w-1/2 mx-12 text-gray-900 bg-transparent flex justify-center items-center text-center">
          <div>
            <h1 className="text-3xl font-semibold m-6">Our <span className="text-orange-600">Pricing</span>  Guarantee</h1>
            <p className="text-lg mb-4">
            Our pricing guarantee ensures that you always receive the best value 
            for your money. We promise to match or beat competitor prices, ensuring 
            you get quality services at the most competitive rates. Trust us for 
            unparalleled affordability and value.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row py-10">
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-2xl transform transition-all hover:scale-102 hover:shadow-2xl">
          <Image
            src={map}
            alt="All Over UK Map Image"
            placeholder="blur"
            width={800}
            height={500}
          />
        </div>
        <div className="md:w-1/2 mx-12 text-gray-900 flex justify-center items-center text-center">
          <div>
            <h1 className="text-3xl font-semibold m-6">We Also <span className="text-orange-600">Cover Most</span>  of the UK</h1>
            <p className="text-lg mb-6">
              Our services extend across the majority of the UK, ensuring that 
              no matter where you are located, you can benefit from our comprehensive 
              offerings. Experience reliable and widespread coverage with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
