"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Customers from "./Customers";


const HomePage = () => {


  return (
    <>
      <section className="bg-white-500 text-black h-screen">
        <div className="container mx-auto px-4 flex flex-col md:flex-row py-10">
          <div className="md:w-1/2">
            <Image
              src="/image/gu.webp"
              alt="Your Image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="md:w-1/2 bg-red-500 flex justify-center items-center text-center">
            <div>
              <h1 className="text-4xl font-bold mt-8">Mobile Tyre Fitting</h1>
              <p className="text-lg mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis esse dolorem veniam in maxime ea quis vitae quibusdam
                cupiditate sint, officiis vel, tempora pariatur ducimus eum
                dicta recusandae,
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <Customers />
        </div>
      </section>
    </>
  );
};

export default HomePage;
