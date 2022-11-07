import React from "react";
import DinnerItem from "./DinnerItem";
import useMeals from "../../../../hook/useMeals";
const Dinner = () => {
  const [data] = useMeals();
  console.log(data.dinner)
  const dinnerItems= data.dinner;

  return (
    <div className="w-10/12 mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
             dinnerItems && dinnerItems.map(item => <DinnerItem
                  key={item.id}
                  item={item}
              ></DinnerItem>)
      }
    </div>
  );
};

export default Dinner;
