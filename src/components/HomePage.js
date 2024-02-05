import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div>
        {" "}
        <section className="bg-white-500 text-black py-16 text-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Mobile Tyre Fitting</h1>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            quam eget.
          </p>
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter your postcode"
              className="py-2 px-4 border-b border-yellow-500 text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-yellow-600 transition duration-300">
              Check Availability Online
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
