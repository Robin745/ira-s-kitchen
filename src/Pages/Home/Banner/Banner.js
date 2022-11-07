import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="relative">
        <img className="w-full h-auto" src={banner} alt="" />
        <h1 className="hidden md:block absolute inset-x-0 top-1/3 transform -translate-x-0 -translate-y-1/2 md:text-xl lg:text-2xl xl:text-3xl font-semibold text-green-600">
          Find the best food for waiting for you
        </h1>
        <form
          onSubmit={handleFormSubmit}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <input
            className="px-4 h-8 md:h-10 w-48 md:w-96 rounded-full relative border-none"
            type="search"
            name="Search Your Food"
            placeholder="Search Food"
            id="784564"
          />
          <input
            className="bg-red-600 hover:bg-red-500 rounded-full text-sm w-12 md:w-16 lg:w-20 absolute inset-y-0 right-0"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Banner;
