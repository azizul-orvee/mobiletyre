"use client";
import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import axios from 'axios';

const Customers = () => {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // State to manage which element to display
  const [show, setShow] = useState({
    button1: true,
    loader: false,
    button2: false,
    thankYou: false,
  });

  const handleClickButton1 = () => {
    // Show loader first
    setShow({ button1: false, loader: true, button2: false, thankYou: false });
    // Simulate a loading period, then show button2

    
    setTimeout(() => {
      setShow({ button1: false, loader: false, button2: true });
    }, 2000); // 2 seconds loading time
  };

  const handleClickButton2 = async (e) => {
    e.preventDefault();
    console.log(formData)

    setShow({ button1: false, loader: true, button2: false, thankYou: false });

    try {
      await axios.post(`https://api.telegram.org/bot6804560021:AAGxqcXgFHse0xbFg5Y75fBTRpj8GFwGOsU/sendMessage`, {
        chat_id:-1002003502475,
        text: `${formData.name} ${formData.phone} 
        Postcode: ${formData.postcode}
        Tyre: ${formData.size}`
      });
      setFormData({});

    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setShow({
        button1: false,
        loader: false,
        button2: false,
        thankYou: true,
      });
    }



    // Reset state to show the first button
    setShow({ button1: false, loader: true, button2: false, thankYou: false });

    setTimeout(() => {
      setShow({
        button1: false,
        loader: false,
        button2: false,
        thankYou: true,
      });
    }, 2000);
    setFormData({});
  };

  return (
    <div>
      {show.button1 && (
        <>
          <div >
          <form onSubmit={handleClickButton1} className="flex flex-col items-center mt-10">
            <input
              name="postcode"
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter your postcode"
              className="py-2 px-4 border-b border-orange-600 text-gray-800 focus:outline-none"
            />
            <button
              className="bg-orange-600 text-white shadow-md shadow-orange-200 py-2 px-4 rounded-md mt-4 hover:bg-orange-800 transition duration-300"
            >
              Check Availability Online
            </button>
            </form>

          </div>
        </>
      )}

      {show.loader && (
        <>
          <p>checking</p>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </>
      )}

      {show.button2 && (
        <form onSubmit={handleClickButton2} className="mt-4 space-y-4 flex flex-col items-center justify-center">
          <input
          required
          name="name"
          onChange={handleChange}
            type="text"
            placeholder="Enter Your Name"
            className="py-2 px-4 border-b border-orange-600 text-gray-800 focus:outline-none"
          />
          <input
          required
            type="text"
            name="size"
            onChange={handleChange}
            placeholder="Enter Tyre Size"
            className="py-2 px-4 border-b border-orange-600 text-gray-800 focus:outline-none"
          />
          <input
          required
            type="tel"
            name="phone"
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="py-2 px-4 border-b border-orange-600 text-gray-800 focus:outline-none"
          />
          <button
            className="bg-orange-600 text-white py-2 px-4 shadow-md shadow-orange-200 rounded-md mt-4 hover:bg-orange-800 transition duration-300"
          >
            Check Availability Online
          </button>
        </form>
      )}
      {show.thankYou && (
        <>
        <div className="text-green-500 font-bold text-2xl mt-16">Thank you!</div>
        </>
      )}
    </div>
  );
};

export default Customers;
