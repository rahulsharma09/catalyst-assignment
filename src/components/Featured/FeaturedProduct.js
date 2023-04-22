import React from "react";
import "./FeaturedProduct.css";
import { useSelector, useDispatch } from "react-redux";
import FeaturedCard from "./FeaturedCard";
import { fetchFeaturedProducts } from "../../store/featuredSlice";
import { fetchProducts } from "../../store/productSlice";
import { fetchColor } from "../../store/colorSlice";
import { fetchMaterial } from "../../store/materialSlice";
import { useState } from "react";
import Loading from "../Loading/Loading";
import { useEffect } from "react";

const FeaturedProduct = () => {
  const dispatch = useDispatch();
  const featuredProducts = useSelector((state) => state.featured.data.featured);
  const products = useSelector((state) => state.product.data);
  const color = useSelector((state) => state.color.data);
  const material = useSelector((state) => state.material.data);
  let finalProducts = [];
  const [loading, setLoading] = useState(0);
  console.log("All Products : ", products);
  console.log("Featured Products : ", featuredProducts);
  useEffect(() => {
    setLoading(1);
    reload();
    dispatch(fetchFeaturedProducts());
    dispatch(fetchProducts());
    dispatch(fetchColor());
    dispatch(fetchMaterial());
    setTimeout(() => {
      setLoading(0);
    }, 2400);
  }, []);
  useEffect(() => {
    document.getElementById("navbar").style.background = "grey";
  }, []);
  const reload = () => {
    let reloadPage = localStorage.getItem("reloadPage");
    reloadPage = JSON.parse(reloadPage)
    console.log("reload page",reloadPage)
    if(reloadPage == null){
      localStorage.setItem("reloadPage",JSON.stringify("true"));
      setTimeout(() => {
        window.location.reload(false);
      },2000)
    }
  }
  for(let i=0; i<products.length; i++){
    for(let j=0; j<featuredProducts.length; j++){
      if(products[i].id == featuredProducts[j].productId){
        finalProducts.push(products[i]);
      }
    }
  }
  console.log("Final Products output  ")
  return (
    <div className="featured-section p-3">
      <h3>Featured Products</h3>
      <hr />
      <div className="featured-root">
        {loading == true && <Loading />}
        {!loading &&
          finalProducts.map((product, index) => {
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
