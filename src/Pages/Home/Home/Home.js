import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../../../Shared/CustomLink/CustomLink";
import Banner from "../../Home/Banner/Banner"

const Home = () => {
  
  return (
    <div className="">
          <Banner></Banner>
          <div className="my-6">
              <nav className="flex items-center justify-center">
                  <CustomLink to='/home/breakfast' className="mr-2"> Breakfast </CustomLink>
                  <CustomLink to='/home/lunch' className="mr-2"> Lunch </CustomLink>
                  <CustomLink to='/home/dinner' className="mr-2"> Dinner </CustomLink>
              </nav>
              <Outlet/>
          </div>
    </div>
  );
};

export default Home;
