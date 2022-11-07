import React from "react";
import "./Footer.css";
import Logo from "../../assets/navLogo/Logo.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className=" bg-slate-800 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between w-10/12 mx-auto text-gray-200 text-xs">
        <div className="w-28">
          <img src={Logo} alt="" />
        </div>
        <div className="w-fll md:w-96 flex flex-col md:flex-row justify-center md:justify-around text-left">
          <div>
            <ul>
              <li>About Online Food</li>
              <li>Read Our Blog</li>
              <li>Sign Up to Delever</li>
              <li>Add Your Resturant</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Get Help</li>
              <li>Read FAQS</li>
              <li>View All Cities</li>
              <li>Resturant Near Me</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Pricing</li>
              <li>copyright&copy; {year}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
