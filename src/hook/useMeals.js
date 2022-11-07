import { useEffect, useState } from "react";

const useMeals = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => SetData(data));
  }, []);

  return [data];
};
export default useMeals;
