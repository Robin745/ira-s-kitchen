import React, { useState } from "react";
import Logo from "../../assets/navLogo/Logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  const item = 5;
  return (
    <div className="">
      <nav className="flex items-center justify-between bg-white h-16 w-full px-4 lg:px-8">
        <a href="/">
          <img className="lg:pl-12 w-26 h-16" src={Logo} alt="" />
        </a>
        <div className="flex gap-4 items-center">
          <Link className="relative" to="/checkout">
            <AiOutlineShoppingCart className="text-xl text-gray-700 hover:text-black"></AiOutlineShoppingCart>
            {item !== 0 && (
              <p className="bg-red-700 rounded-full w-6 absolute top-[-20px] right-[-15px] text-white">
                15
              </p>
            )}
          </Link>

          {user ? (
            <div className="flex gap-2 items-center">
              <h2>{user.displayName}</h2>
              <button
                onClick={handleSignOut}
                className="bg-teal-800 hover:bg-teal-600 rounded-xl  px-2 text-white"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div>
              <Link to="login">
                <button className="text-lg hover:text-gray-500 mr-2">
                  Login
                </button>
              </Link>
              <Link to="signup">
                <button className="bg-red-600 hover:bg-rose-800 rounded-xl py-1 px-2 text-white">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
