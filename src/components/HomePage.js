"use client";
import React from "react";
import Image from "next/image";
import Customers from "./Customers";
import tyree from '/public/image/tyree.jpeg'

const HomePage = () => {
  return (
    <>

      <section className="bg-white-500 text-black pb-10 mt-16">
      s
        <div className="container mx-auto px-4 flex flex-col md:flex-row py-10">
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-2xl transform transition-all hover:scale-102 hover:shadow-2xl">
            <Image
              src={tyree}
              alt="Mobile tyre fitting image"
              width={800}
              height={500}
              placeholder="blur"
            />
          </div>
          <div className="md:w-1/2 flex justify-center items-center text-center">
            <div>
              <h1 className="text-4xl font-bold mt-8 text-gray-900 font-sans">
                Mobile <span className="text-orange-600">Tyre</span> Fitting
              </h1>
              <div className="text-lg text-gray-900">
             <p className="mt-4"> Finding us on Google means you are just a step away from the ultimate convenience in tyre fitting. We are ready and available to bring our expert tyre fitting services directly to you. We cover most of the UK.</p>
              <p className="mt-4">
  For immediate assistance, give us a <span className="text-orange-600">call</span> or send us a WhatsApp message.
</p>
<p class="mt-4">
You can also check availability directly on our website. We promise to get back to you promptly.
</p>

              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[-25px] lg:mt-10">
          <Customers />
        </div>
      
      </section>

    </>
  );
};

export default HomePage;
