import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import { Provider } from "react-redux";
import store from "./store/Store";
import "./App.css";
import Cart from "./components/Cart/Cart";
import FeaturedProduct from "./components/Featured/FeaturedProduct";
import ProductDetail from "./components/ProductDetail/ProductDetail";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-section">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="cart/" element={<Cart />}></Route>
            <Route path="featured/" element={<FeaturedProduct />}></Route>
            <Route path="product-detail/:id" element={<ProductDetail />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
