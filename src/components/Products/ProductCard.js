import React from "react";
import "./Products.css";
import { addToCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product, color, material }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleCart = (product) => {
    let flag = false;
    // // console.log(cartItems.length);
    if (cartItems.length <= 0) {
      dispatch(addToCart(product));
      let cookie = []
      cookie.push(product)
      localStorage.setItem("cartProducts", JSON.stringify(cookie));
      alert("Product added to cart");
    } else {
      let cookieProduct = localStorage.getItem("cartProducts");
      cookieProduct = JSON.parse(cookieProduct);
      // console.log(cookieProduct)
      cookieProduct.push(product);
      localStorage.setItem("cartProducts",JSON.stringify(cookieProduct))
      cartItems.map((item) => {
        if (item.id == product.id) {
          flag = true;
        }
      });
      if (flag) {
        alert("Item already added");
      } else {
        dispatch(addToCart(product));
        alert("Product added to cart");
      }
    }
  };
  return (
    <div className="custom-card">
      <div className="hoverwrap" onClick={() => handleCart(product)}>
        <img className="product-image" src={product.image} alt="" />
        <div class="hovercap">
          <h4>Add to cart</h4>
        </div>
      </div>
      <p>{product.name}</p>
      <div className="color-material">
        <p>
          {color.map((color, index) => {
            if (product.colorId == color.id) {
              return <p>{color.name}</p>;
            }
          })}
        </p>
        <p>
          {material.map((material, index) => {
            if (product.materialId == material.id) {
              return <p>{material.name}</p>;
            }
          })}
        </p>
      </div>
      <div className="price">
        <p>INR {product.price}.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
