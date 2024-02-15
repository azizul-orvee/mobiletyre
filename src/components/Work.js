import React from "react";
import { GiFlatTire } from "react-icons/gi";
import WorkCard from "./WorkCard";
import location from '/public/image/location.webp'
import check from '/public/image/check.webp'
import roadcar from '/public/image/roadcar.webp'


const WorkData = [
  {
    step: "Step 1",
    title: "Tell us your location",
    icon: location,
  },
  {
    step: "Step 2",
    title: "Give us your tyre size",
    icon: check,
  },
  {
    step: "Step 3",
    title: "You are ready to rock 'n roll again",
    icon: roadcar,
  },
];

const Work = () => {
  return (
    <div className="mt-2 smb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <h2 className="text-3xl text-gray-900 font-semibold tracking-wide uppercase">
            How it Works
          </h2>
        </div>
        <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {WorkData.map((service, index) => (
            <WorkCard
              key={index}
              step={service.step}
              title={service.title}
              image={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
