import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div className="App  bg-slate-300">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>  
      <Footer></Footer>
    </div>
  );
}

export default App;
