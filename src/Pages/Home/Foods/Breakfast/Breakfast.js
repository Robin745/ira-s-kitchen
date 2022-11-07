import BreakfastItem from "./BreakfastItem";
import useMeals from "../../../../hook/useMeals";

const Breakfast = () => {
  const [data] = useMeals();
  const morningItems = data.breakfast;
  return (
    <div className="w-10/12 mx-auto">
      {morningItems && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-2 w-10/12 mx-auto">
          {morningItems.map((item) => (
            <BreakfastItem key={item.id} item={item}></BreakfastItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default Breakfast;
