import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Breakfast from "./Pages/Home/Foods/Breakfast/Breakfast";
import Lunch from "./Pages/Home/Foods/Lunch/Lunch";
import Dinner from "./Pages/Home/Foods/Dinner/Dinner";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";

function App() {
  return (
    <div className="App bg-stone-100">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}>
            <Route index element={<Lunch></Lunch>} />
            <Route path="breakfast" element={<Breakfast></Breakfast>}></Route>
            <Route path="lunch" element={<Lunch></Lunch>}></Route>
            <Route path="dinner" element={<Dinner></Dinner>}></Route>
          </Route>
          <Route path="items/:catagory/:id" element={<ItemDetails></ItemDetails>}></Route>
          <Route path="breakfast/items/:catagory/:id" element={<ItemDetails></ItemDetails>}></Route>
          <Route path="lunch/items/:catagory/:id" element={<ItemDetails></ItemDetails>}></Route>
          <Route path="dinner/items/:catagory/:id" element={<ItemDetails></ItemDetails>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
