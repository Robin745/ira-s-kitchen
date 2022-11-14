import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import { removeElement } from "../../hook/useCart";

const CheckoutItem = ({ item, catagory }) => {
  const { price, name, img, quantity, id } = item;
  const newPrice = price * quantity;
  const [updateQuantity, setUpdateQuantity] = useState(quantity);
  const [updatePrice, setUpdatePrice] = useState(newPrice);
  const handleItemDecrease = () => {
    if (updateQuantity === 1) {
      return;
    }
    const newQualtity = updateQuantity - 1;
    setUpdateQuantity(newQualtity);
    const newPrice = newQualtity * price;
    console.log(typeof newQualtity);
    setUpdatePrice(newPrice);
  };
  const handleItemIncrease = () => {
    const newQualtity = updateQuantity + 1;
    setUpdateQuantity(newQualtity);
    const newPrice = newQualtity * price;
    console.log(typeof newQualtity);
    setUpdatePrice(newPrice);
  };
  const handleItemRemove = () => {
    removeElement(id, catagory);
    window.location.reload(true);
  };
  return (
    <>
      <div className="flex items-center justify-between bg-stone-200 h-14 md:h-20 rounded-md p-2 my-4">
        <div className="flex items-center gap-x-2">
          <img className="w-12 md:w-16" src={img} alt="" />
          <div>
            <h4 className="text-xs lg:text-base md:font-semibold lg:font-normal">{name}</h4>
            <h2 className="md:text-lg text-red-600 font-semibold">
              ${updatePrice}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-x-4 mr-2">
          <div className="relative">
            <input
              className="h-8 w-20 rounded-full text-xl text-center ml-2"
              type="text"
              name=""
              id=""
              value={updateQuantity}
              readOnly
            />
            <AiOutlineMinus
              onClick={handleItemDecrease}
              className="absolute left-4 top-2"
            ></AiOutlineMinus>
            <AiOutlinePlus
              onClick={handleItemIncrease}
              className="absolute right-3 top-2"
            ></AiOutlinePlus>
          </div>
          <AiFillDelete
            onClick={handleItemRemove}
            className="text-xl text-orange-600"
          ></AiFillDelete>
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
