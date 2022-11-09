import React from "react";
import useMeals from "../../../hook/useMeals";
import Service from "./Service";

const OurServices = () => {
  const [data] = useMeals();
  const services = data.services;
  return (
    <div className="w-10/12 mx-auto">
      <div className="w-96 text-left my-8">
        <h1 className="w-full text-xl md:text-3xl font-semibold mb-4">
          Why you choose our foods
        </h1>
        <p className="w-[300px] md:w-[500px] lg:w-[700px] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          incidunt ex eum nemo, deserunt nulla?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
        {services &&
          services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
      </div>
    </div>
  );
};

export default OurServices;
