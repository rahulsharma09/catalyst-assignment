import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart);
  let cartLength = cartItem.length;
  if (cartItem.length == 0) {
    let cartProducts = localStorage.getItem("cartProducts");
    cartProducts = JSON.parse(cartProducts);
    if (cartProducts.length > 0) {
      console.log(cartProducts);
      cartLength = cartProducts.length;
    }
  }
  return (
    <>
      <nav id="navbar" className="navbar navbar-inner navbar-expand-lg">
        <Link className="nav-title" to="/">
          <h2>
            <span className="head-title">right</span>fit.com
          </h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon />
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="featured/">
                Featured Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="cart/">
                <ShoppingCartIcon /> ({cartLength})
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
