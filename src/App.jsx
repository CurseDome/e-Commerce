import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Electronics from "./components/Electronics";
import AboutUS from "./components/AboutUS";
import Customer_service from "./components/Customer_service";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/customer_service" element={<Customer_service />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
