import React from "react";
import Banner from "../../Home/Banner/Banner";
import FoodsNavbar from "../Foods/FoodsNavbar/FoodsNavbar";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <FoodsNavbar></FoodsNavbar>
      <div>
        <button className="text-md text-gray-100 my-8 px-8 py-1 bg-gray-500 hover:bg-teal-900 rounded-lg">
          Checkout Your Food
        </button>
      </div>
      <OurServices></OurServices>
    </>
  );
};

export default Home;
