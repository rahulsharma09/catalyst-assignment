import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/productSlice";
import { fetchColor } from "../../store/colorSlice";
import { fetchMaterial } from "../../store/materialSlice";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Filter/Filter";

const Products = () => {
  console.log("Re-render")
  // const [products, setProduct] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(0);  
  const materialFilter = (filterId) => {
    setSelectedFilter(filterId);
    // alert(filterId)
    // dispatch
  };
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const color = useSelector((state) => state.color.data);
  const material = useSelector((state) => state.material.data);
  useEffect(() => {
    document.getElementById("navbar").style.background = "transparent";
    dispatch(fetchProducts());
    dispatch(fetchColor());
    dispatch(fetchMaterial());
  }, []);
  useEffect(() => {
    console.log("Filter change")
  },[selectedFilter])
  return (
    <div>
      <HeroBanner />
      <div className="product-root">
        <div className="filter-section">
          <Filter materialFilter={materialFilter} color={color} material={material} />
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
