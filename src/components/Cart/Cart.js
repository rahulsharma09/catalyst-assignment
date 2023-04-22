import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { removeFromCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  let cartProducts;
  useEffect(() => {
    document.getElementById("navbar").style.background = "grey";
  }, []);
  const handleRemove = (id) => {
    let arr = [];
    // console.log("Handle Remove ", cart.length);
    dispatch(removeFromCart(id));
    deleteFromCart(id);
  };
  const deleteFromCart = (id) => {
    cartProducts = localStorage.getItem("cartProducts");
    cartProducts = JSON.parse(cartProducts);
    // console.log("data - - - ", cartProducts.length);
    if (cartProducts.length > 0) {
      // console.log("first")
      if (cartProducts.length == 1 && cartProducts.id == id) {
        localStorage.setItem("cartProducts", []);
        return;
      }
      // console.log("IN else");
      let arr = [];
      for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].id != id) {
          arr.push(cartProducts[i]);
        }
      }
      // console.log("after remove - ", arr);
      localStorage.setItem("cartProducts", JSON.stringify(arr));
    }
  };
  if (cart.length == 0) {
    cart = [];
    cartProducts = localStorage.getItem("cartProducts");
    cartProducts = JSON.parse(cartProducts);
    // console.log("Cart product data on render ---", cartProducts);
    cart = cartProducts;
    // console.log("Cart set - ", cart);
  }
  return (
    <div className="cart-section p-5">
      <h5>Your Cart</h5>
      {cart.length > 0 ? (
        <>
          {cart.map((product, index) => {
            return (
              <div className="cart-card">
                <img className="cart-image" src={product.image} alt="" />
                <div className="data">
                  <h2>{product.name}</h2>
                  <p>INR {product.price}.00</p>
                </div>
                <div className="ml-auto mr-5">
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <h2 className="text-center mt-5">No items in your cart</h2>
      )}
    </div>
  );
};

export default Cart;
