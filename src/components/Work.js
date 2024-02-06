import React from "react";
import { GiFlatTire } from "react-icons/gi";
import WorkCard from "./WorkCard";

const WorkData = [
  {
    step: "Step 1",
    title: "Mobile Tyre Fitting",
    icon: <GiFlatTire size={100} />,
  },
  {
    step: "Step 2",
    title: "Van Tyre Fitting",
    icon: <GiFlatTire size={100} />,
  },
  {
    step: "Step 3",
    title: "4x4 Tyre Fitting",
    icon: <GiFlatTire size={100} />,
  },
];

const Work = () => {
  return (
    <div className="py-12 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">
            How it Works
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WorkData.map((service, index) => (
            <WorkCard
              key={index}
              step={service.step}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
