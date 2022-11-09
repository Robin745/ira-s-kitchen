import { useParams } from "react-router-dom";
import data from "../../localData/data.json";
import FoodsNavbar from "../Home/Foods/FoodsNavbar/FoodsNavbar";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ItemDetails = () => {
  const { catagory, id } = useParams();
  const item = data[catagory][id - 1];
  const { name, img, price, desc } = item;
  return (
    <>
      <FoodsNavbar></FoodsNavbar>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-center gap-6 my-8">
        <div className="w-[350px] md:w-[400px] text-left mt-8 order-2 md:order-1">
          <h1 className="text-4xl font-semibold mb-8">{name}</h1>
          <p>{desc}</p>
          <div className="flex items-center my-4 ">
            <p className="text-[32px] font-semibold">${price}</p>
            <div className="relative">
              <input
                className="h-8 w-20 rounded-full text-xl text-center ml-2"
                type="text"
                name=""
                id=""
                value="1"
              />
              <AiOutlineMinus className="absolute left-4 top-2"></AiOutlineMinus>
              <AiOutlinePlus className="absolute right-3 top-2"></AiOutlinePlus>
            </div>
          </div>
          <button className="w-24 flex items-center justify-center bg-red-600 hover:bg-red-400 text-white hover:text-gray-200 text-sm py-2 rounded-full">
            <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart>
            <p className="ml-2">Add</p>
          </button>
        </div>
        <div className="lg:w-96 order-1 md:order-2">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
