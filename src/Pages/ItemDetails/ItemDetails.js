import { useParams } from "react-router-dom";
import "./ItemDetails.css";
import data from "../../localData/data.json";
import FoodsNavbar from "../Home/Foods/FoodsNavbar/FoodsNavbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useState } from "react";
import ImageDetails from "./ImageDetails";

const ItemDetails = () => {
  const [items, setItems] = useState(parseInt(1));
  const { catagory, id } = useParams();
  const item = data[catagory][id - 1];
  const { name, img, price, desc } = item;
  const [updatePrice, setUpdatePrice] = useState(price);

  const handleItemDecrease = () => {
    if (items === 1 || items === 0) {
      return;
    }
    const newItems = items - 1;
    setItems(newItems);
    const newPrice = newItems * price;
    setUpdatePrice(newPrice);
  };
  const handleItemIncrease = () => {
    const newItems = items + 1;
    setItems(newItems);
    const newPrice = newItems * price;
    setUpdatePrice(newPrice);
  };
  const handleCart = () => {
    toast.success(items + " Items Added to Cart");
  };

  return (
    <>
      <FoodsNavbar></FoodsNavbar>
      <div className="w-11/12 lg:w-full mx-auto flex flex-col md:flex-row justify-center gap-6 my-8">
        <div className="w-[full] md:w-[800px] lg:w-[400px] text-left mt-4 md:mt-8 lg:mt-16 order-2 md:order-1">
          <h1 className="text-4xl font-semibold mb-8">{name}</h1>
          <p>{desc}</p>
          <div className="flex items-center my-4 ">
            <p className="text-[32px] font-semibold">${updatePrice}</p>
            <div className="relative">
              <input
                className="h-8 w-20 rounded-full text-xl text-center ml-2"
                type="text"
                name=""
                id=""
                value={items}
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
          </div>
          <button
            onClick={handleCart}
            className="w-32 flex items-center justify-center bg-red-600 hover:bg-red-400 text-white hover:text-gray-200 text-sm py-2 rounded-full"
          >
            <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart>
            <p className="ml-2">Add to cart</p>
          </button>
        </div>

        <div className="lg:w-96 order-1 md:order-2">
          <ImageDetails catagory={catagory} id={id} img={img}></ImageDetails>
        </div>

        <ToastContainer
          position="bottom-center"
          autoClose={1000}
        ></ToastContainer>
      </div>
    </>
  );
};

export default ItemDetails;
