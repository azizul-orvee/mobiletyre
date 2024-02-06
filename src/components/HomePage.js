"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Customers from "./Customers";

const HomePage = () => {
  return (
    <>
      <section className="bg-white-500 text-black h-screen mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row py-10">
          <div className="md:w-1/2 p-4 bg-gray-100 rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src="/image/gu.webp"
              alt="Your Image"
              width={1500}
              height={1500}
            />
          </div>
          <div className="md:w-1/2 flex justify-center items-center text-center">
            <div>
              <h1 className="text-4xl font-bold mt-8 text-gray-900 font-sans">
                Mobile <span className="text-orange-600">Tyre</span> Fitting
              </h1>
              <p className="text-lg m-4 mx-6 text-gray-900">
                Our mobile tire fitting service brings convenience to your
                doorstep. We offer expert tire installation, balancing, and
                alignment at a location of your choice. Say goodbye to the
                hassle of visiting a garage – we will ensure your tires are
                professionally fitted, keeping you safe on the road.
              </p>
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
