import { Route, Routes } from "react-router-dom";
import Home from "../comonents/Home";
import DetailsOne from "../pages/Details/DetailsOne";
import DetailsThree from "../pages/Details/DetailsThree";
import DetailsTwo from "../pages/Details/DetailsTwo";
import MyCart from "../pages/my/MyCart";
import MyOrders from "../pages/my/MyOrders";
import NotFoundPage from "../pages/NotFoundPage";
import Products from "../pages/Products";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/1/details" element={<DetailsOne />} />
        <Route path="/products/2/details" element={<DetailsTwo />} />
        <Route path="/products/3/details" element={<DetailsThree />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default Router;
