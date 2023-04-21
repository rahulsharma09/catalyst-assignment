import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/productSlice";
import { fetchColor } from "../../store/colorSlice";
import { fetchMaterial } from "../../store/materialSlice";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../store/materialFilterSlice";
import { filterColorProducts } from "../../store/colorFilterSlice";
import Loading from "../Loading/Loading";
import Filter from "../Filter/Filter";

const Products = () => {
  const [selectedMaterialFilter, setMaterialFilter] = useState(0);
  const [selectedColorFilter, setColorFilter] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [loading, setLoading] = useState(1);
  let [products, setProducts] = useState([])
  const materialFilter = (filterId) => {
    setMaterialFilter(filterId);
  };
  const colorFilter = (colorId) => {
    setColorFilter(colorId);
  };
  // let products = [];
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.data);
  let materialFilterProducts = useSelector(
    (state) => state.materialFilter.data
  );
  let colorFilterProduct = useSelector((state) => state.colorFilter.data);
  // console.log("TEST HAI BHAI!! ", colorFilterProduct);
  const color = useSelector((state) => state.color.data);
  const material = useSelector((state) => state.material.data);
  useEffect(() => {
    document.getElementById("navbar").style.background = "transparent";
    dispatch(fetchProducts());
    dispatch(fetchColor());
    dispatch(fetchMaterial());
    setTimeout(() => {
      setLoading(0);
      console.log(loading)
    }, 4000);
  }, []);

  useEffect(() => {
    setSelectedFilter("Material");
    setLoading(1);
    dispatch(filterProducts(selectedMaterialFilter));
    setTimeout(() => {
      setLoading(0)
    },1800)
    
    console.log("Material dispatch")
  }, [selectedMaterialFilter]);

  useEffect(() => {
    setSelectedFilter("Color");
    setLoading(1);
    dispatch(filterColorProducts(selectedColorFilter));
    setTimeout(() => {
      setLoading(0)
    },1800);
  }, [selectedColorFilter]);
  console.log("Selected Filter: ", selectedFilter)
  switch (selectedFilter) {
    case "Material":
      console.log("material selected")
      products = materialFilterProducts;
    break;
    case "Color":
      console.log("color selected");
      products = colorFilterProduct;
    break;
  }
  return (
    <div>
      <HeroBanner />
      <div className="product-root">
        <div className="filter-section">
          <Filter
            materialFilter={materialFilter}
            colorFilter={colorFilter}
            color={color}
            material={material}
          />
        </div>
        <div className="products-section">
          {loading == true && 
            <Loading />
          }
          {!loading && products.map((product, index) => {
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
