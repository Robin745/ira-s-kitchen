import React from 'react';
import { useParams } from 'react-router-dom';
import useMeals from '../../hook/useMeals';

const ItemDetails = () => {
    const { catagory, id } = useParams();
    const [data] = useMeals();

    console.log(data)
    return (
        <div>
            <h1 className="text-3xl">Catagory: {catagory}</h1>
            <h1 className="text-3xl">this is food item of id {id}</h1>
        </div>
    );
};

export default ItemDetails;