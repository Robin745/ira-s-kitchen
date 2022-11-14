import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Breakfast from "./Pages/Home/Foods/Breakfast/Breakfast";
import Lunch from "./Pages/Home/Foods/Lunch/Lunch";
import Dinner from "./Pages/Home/Foods/Dinner/Dinner";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import RequiredAuth from "./RequiredAuth/RequiredAuth";
import Checkout from "../src/Pages/Checkout/Checkout";
import Address from "./Pages/Checkout/Address";
import OrderConfirmed from "./Pages/Checkout/OrderConfirmed";

function App() {
  return (
    <div className="App bg-stone-100">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}>
            <Route index element={<Lunch></Lunch>} />
            <Route path="breakfast" element={<Breakfast></Breakfast>}></Route>
            <Route path="lunch" element={<Lunch></Lunch>}></Route>
            <Route path="dinner" element={<Dinner></Dinner>}></Route>
          </Route>
          <Route path="/home" element={<Home></Home>}>
            <Route index element={<Lunch></Lunch>} />
            <Route path="breakfast" element={<Breakfast></Breakfast>}></Route>
            <Route path="lunch" element={<Lunch></Lunch>}></Route>
            <Route path="dinner" element={<Dinner></Dinner>}></Route>
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route
            path="items/:catagory/:id"
            element={<ItemDetails></ItemDetails>}
          ></Route>
          <Route
            path="breakfast/items/:catagory/:id"
            element={<ItemDetails></ItemDetails>}
          ></Route>
          <Route
            path="lunch/items/:catagory/:id"
            element={<ItemDetails></ItemDetails>}
          ></Route>
          <Route
            path="dinner/items/:catagory/:id"
            element={<ItemDetails></ItemDetails>}
          ></Route>
          <Route
            path="/checkout"
            element={
              <RequiredAuth>
                <Checkout></Checkout>
              </RequiredAuth>
            }
          ></Route>
          <Route path="checkout/user-address" element={<Address></Address>}></Route>
          <Route path="checkout/user-address/confirmed" element={<OrderConfirmed></OrderConfirmed>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
