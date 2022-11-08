import React from "react";

const DinnerItem = ({item}) => {
  const { name, price, img, desc } = item;
  return (
    <div className="rounded hover:bg-white p-4 mb-4 md:mb-1 lg:mb-0">
      <img className="object-cover w-48 mx-auto" src={img} alt="" />
       <h4 className='text-lg'>{name}</h4>
       <p className='text-sm text-gray-700'>{desc.slice(0, 25)}</p>
       <p className='font-semibold my-2'> <span className='text-xl'>${price}</span>.<span className='text-lg'>99</span></p>
    </div>
  );
};

export default DinnerItem;
