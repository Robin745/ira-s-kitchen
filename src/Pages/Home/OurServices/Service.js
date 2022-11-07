import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Service = ({ service }) => {
  const { name, img, desc, icon } = service;
  return (
    <div className="mb-8">
      <img src={img} alt="" />
      <div className="flex text-left px-8">
        <div className="my-3 mr-2 w-14">
          <img src={icon} alt="" />
        </div>
        <div>
          <p className="text-lg my-2">{name}</p>
          <p>
            <small> {desc} </small>{" "}
          </p>

          <div className="flex items-center my-1">
            <button>
              <small className="text-blue-600 font-semibold"> see more </small>
            </button>
            <div className="bg-lime-500 mt-1 ml-2 rounded-full">
              <BsArrowRightShort className="text-white text-xl"></BsArrowRightShort>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Service;
