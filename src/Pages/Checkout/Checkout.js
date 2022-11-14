import FoodsNavbar from "../Home/Foods/FoodsNavbar/FoodsNavbar";
import { getCart } from "../../hook/useCart";
import data from "../../localData/data.json";
import CheckoutItem from "./CheckoutItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const addedBreakfastItems = getCart("breakfast");
  const addedLunchItems = getCart("lunch");
  const addedDinnerItems = getCart("dinner");
  const breakfastItems = [];
  const lunchItems = [];
  const dinnerItems = [];
  const breakfastData = [data.breakfast];
  const lunchData = [data.lunch];
  const dinnerData = [data.dinner];

  for (let id in addedBreakfastItems) {
    const item = breakfastData[0].find((item) => item.id == id);
    item.quantity = addedBreakfastItems[id];
    breakfastItems.push(item);
  }
  for (let id in addedLunchItems) {
    const item = lunchData[0].find((item) => item.id == id);
    item.quantity = addedLunchItems[id];
    lunchItems.push(item);
  }
  for (let id in addedDinnerItems) {
    const item = dinnerData[0].find((item) => item.id == id);
    item.quantity = addedDinnerItems[id];
    dinnerItems.push(item);
  }

  return (
    <>
      <FoodsNavbar></FoodsNavbar>
      <div className="w-10/12 mx-auto my-8">
        {lunchItems.length === 0 &&
        breakfastItems.length === 0 &&
        dinnerItems.length === 0 ? (
          <div className="mt-20 mb-[400px]">
            <h2 className="text-2xl text-sky-600 font-semibold">
              Your Cart is Empty
            </h2>
            <p className="my-2 text-green-600">
              You need to add some items to your Cart first
            </p>
          </div>
        ) : (
          <div className="w-72 lg:w-96 mx-auto text-left">
            <h4 className="text-lg">
              <span className="font-semibold">Gulshan Plaza Restura GPR</span>
            </h4>
            <p>Arriving in 20-30 min</p>
            {breakfastItems.map((item) => (
              <CheckoutItem
                id={item.id}
                item={item}
                catagory={"breakfast"}
              ></CheckoutItem>
            ))}
            {lunchItems.map((item) => (
              <CheckoutItem
                id={item.id}
                item={item}
                catagory={"lunch"}
              ></CheckoutItem>
            ))}
            {dinnerItems.map((item) => (
              <CheckoutItem
                id={item.id}
                item={item}
                catagory={"dinner"}
              ></CheckoutItem>
            ))}
            <Link to="user-address">
              <button className="w-80 mx-auto flex items-center justify-center bg-green-900 hover:bg-gray-500 text-white hover:text-gray-200 text-sm py-2 my-8 rounded-md">
                <p className="ml-2">Proceed To Checkout</p>
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
