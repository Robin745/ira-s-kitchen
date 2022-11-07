import React from 'react';

const BreakfastItem = ({ item }) => {
    const { name, price, img, desc } = item;
    return (
        <div className='rounded hover:bg-white p-4 mb-4 md:mb-1 lg:mb-0'>
            <img className='object-cover w-48 mx-auto' src={img} alt="" />
            <h4 className='text-xl'>{name}</h4>
            <p>Price: ${price}</p>
            <p>{desc}</p>
        </div>
    );
};

export default BreakfastItem;