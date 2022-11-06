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
