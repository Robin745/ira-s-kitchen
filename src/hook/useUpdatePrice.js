import { useState } from "react";

const useUpdatePrice = () => {
    const price = 99; 
  const [items, setItems] = useState(parseInt(1));
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
    return [items, updatePrice, handleItemDecrease, handleItemIncrease]
};
export default useUpdatePrice;
