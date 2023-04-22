import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import FeaturedCard from "./FeaturedCard";
import { fetchFeaturedProducts } from '../../store/featuredSlice'
import { fetchProducts } from '../../store/productSlice'
import Loading from "../Loading/Loading";

const FeaturedProduct = () => {
  const featuredProducts = useSelector(state => state.featured.data);
  const products = useSelector(state => state.product.data);
  const color = useSelector((state) => state.color.data);
  const material = useSelector((state) => state.material.data);
  const [loading, setLoading] = useState(0);
  let finalProducts =  [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeaturedProducts());
    dispatch(fetchProducts())
    document.getElementById("navbar").style.background = "grey";
  },[])
  for(let i=0; i<products.length; i++){
    for(let j=0; j<featuredProducts.length; j++){
      if(products[i].id == featuredProducts[j].productId){
        finalProducts.push(products[i]);
      }
    }
  }
  // console.log("Final Products - -",finalProducts)
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
  )
}

export default FeaturedProduct