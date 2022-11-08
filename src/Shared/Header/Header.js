import React from "react";
import Logo from "../../assets/navLogo/Logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <nav className="flex items-center justify-between bg-white h-16 w-full px-4 lg:px-8">
        <a href="/">
          <img className="lg:pl-12 w-26 h-16" src={Logo} alt="" />
        </a>
        <div className="flex gap-4 items-center">
          <AiOutlineShoppingCart className="hidden lg:block text-xl text-gray-700 hover:text-black"></AiOutlineShoppingCart>
          <button className="text-lg hover:text-gray-500">Login</button>
          <button className="bg-red-600 hover:bg-rose-800 rounded-xl py-1 px-2 text-white">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
