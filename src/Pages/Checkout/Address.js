import React from "react";
import { Link } from "react-router-dom";

const Address = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="w-10/12 mx-auto my-8">
        <h2 className="text-3xl text-teal-600 my-8">Please Fill Up The Form</h2>
        <div>
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleFormSubmit}
          >
            <input
              className="w-80 lg:w-[550px] text-lg border-black rounded-lg mb-2"
              type="text"
              name="text"
              id="1"
              value="Delevered to door"
              readOnly
            />
            <input
              className="w-80 lg:w-[550px] text-lg border-black rounded-lg mb-2"
              type="text"
              name="text"
              id="1"
              value="Cash On Delevery"
              readOnly
            />
            <input
              className="w-80 lg:w-[550px] text-lg border-black rounded-lg mb-2"
              type="text"
              name="text"
              id="2"
              placeholder="Your Address"
            />
            <input
              className="w-80 lg:w-[550px] text-lg border-black rounded-lg mb-2"
              type="text"
              name="text"
              id="3"
              placeholder="Business Name"
            />
            <input
              className="w-80 lg:w-[550px] text-lg border-black rounded-lg mb-2"
              type="text"
              name="text"
              id="4"
              placeholder="Flat,suit, or floor"
            />

            <input
              className="w-80 lg:w-[550px] h-20 text-lg border-black rounded-lg mb-2"
              type="text"
              name="text"
              id="5"
              placeholder="Add delevery instruction"
            />
            <Link to="confirmed">
              <input
                className="w-72 bg-green-600 hover:bg-lime-900 py-2 text-lg rounded-lg my-2 text-white font-semibold"
                type="submit"
                value="Place Order"
              />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Address;
