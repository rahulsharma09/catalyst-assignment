import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/productSlice";
import { fetchColor } from "../../store/colorSlice";
import { fetchMaterial } from "../../store/materialSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  // const [products, setProduct] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const color = useSelector((state) => state.color.data);
  const material = useSelector((state) => state.material.data);
  console.log("Material: ", material);
  useEffect(() => {
    document.getElementById("navbar").style.background = "transparent";
    dispatch(fetchProducts());
    dispatch(fetchColor());
    dispatch(fetchMaterial());
  }, []);
  return (
    <div>
      <HeroBanner />
      <div className="product-root">
        <div className="filter-section">
          <h5>
            <b>Filter</b>
          </h5>
          <div className="material-filter">
            <h6>Materials</h6>
            <p className="mb-3"><b>All</b></p>
            {material.map((material, index) => {
              return <div key={index}>
              <p >{material.name}</p> 
              <hr />
            </div>
            ;
            })}
          </div>
          <div className="color-filter">
            <h6>Colors</h6>
            <p className="mb-3"><b>All</b></p>
            {color.map((color, index) => {
              return <div key={index}>
                <p >{color.name}</p> <hr />
              </div>;
            })}
          </div>
        </div>
        <div className="products-section">
          {products.map((product, index) => {
            return (
              <ProductCard
                product={product}
                color={color}
                material={material}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
