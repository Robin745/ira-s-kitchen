import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const FoodsNavbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <div>
      <div className="">
        <nav className="flex items-center justify-center my-8">
          <NavLink style={navLinkStyles} to="breakfast" className="mr-6">
            Breakfast
          </NavLink>
          <NavLink style={navLinkStyles}  to="lunch" className="mr-6">
            Lunch
          </NavLink>
          <NavLink style={navLinkStyles}  to="dinner" className="mr-6">
            Dinner
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default FoodsNavbar;
