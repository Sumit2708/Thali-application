import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Order from "./Component/Order";
import Feedback from "./Component/Feedback";
import Menu from "./Component/Menup";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Cart from "./Component/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
      <div>
        <Header/>
      </div>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path="/Menu" element = {<Menu/>}/>
          <Route path="/Cart" element = {<Cart/>}/>
          <Route path="/Feedback" element = {<Feedback/>}/>
        </Routes>
        <div>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
