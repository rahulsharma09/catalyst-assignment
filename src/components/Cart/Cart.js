import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { removeFromCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    document.getElementById("navbar").style.background = "grey";
  }, []);
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
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
