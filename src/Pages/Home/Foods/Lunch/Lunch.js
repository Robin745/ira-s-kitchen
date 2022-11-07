import React from "react";
import LunchItem from "../Lunch/LunchItem";
import useMeals from "../../../../hook/useMeals";

const Lunch = () => {
  const [data] = useMeals();
  const lunchItems = data.lunch;

  return (
    <div className="text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-2 w-10/12 mx-auto">
        {lunchItems &&
          lunchItems.map((item) => (
            <LunchItem key={item.id} item={item}></LunchItem>
          ))}
      </div>
    </div>
  );
};

export default Lunch;
