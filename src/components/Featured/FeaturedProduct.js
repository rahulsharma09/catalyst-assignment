import React from "react";
import "./FeaturedProduct.css";
import { useSelector, useDispatch } from "react-redux";
import FeaturedCard from "./FeaturedCard";
import { fetchFeaturedProducts } from "../../store/featuredSlice";
import { fetchProducts } from "../../store/productSlice";
import { fetchColor } from "../../store/colorSlice";
import { fetchMaterial } from "../../store/materialSlice";
import { useEffect } from "react";

const FeaturedProduct = () => {
  const dispatch = useDispatch();
  const featuredProducts = useSelector((state) => state.featured.data.featured);
  const products = useSelector((state) => state.product.data);
  const color = useSelector((state) => state.color.data);
  const material = useSelector((state) => state.material.data);
  console.log("Pro: ", products);
  useEffect(() => {
    dispatch(fetchFeaturedProducts());
    dispatch(fetchProducts());
    dispatch(fetchColor());
    dispatch(fetchMaterial());
  }, []);
  useEffect(() => {
    document.getElementById("navbar").style.background = "grey";
  }, []);
  return (
    <div className="featured-section p-3">
      <h3>Featured Products</h3>
      <hr />
      <div className="featured-root">
        {products.map((product, index) => {
          return (
            <FeaturedCard
              product={product}
              color={color}
              material={material}
              featured={featuredProducts}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
