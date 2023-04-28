import React, { useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/productSlice";
import { fetchMaterial } from "../../store/materialSlice";
import { fetchColor } from "../../store/colorSlice";
import Loading from "../Loading/Loading";
import ReactImageMagnify from "react-image-magnify";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(0);
  const products = useSelector((state) => state.product.data);
  console.log(products);
  const colors = useSelector((state) => state.color.data);
  const material = useSelector((state) => state.material.data);
  const data = products.filter((product) => product.id == id);
  let productDetail = { ...data[0] };
  useEffect(() => {
    setLoading(1);
    dispatch(fetchProducts());
    dispatch(fetchMaterial());
    dispatch(fetchColor());
    document.getElementById("navbar").style.background = "grey";
    setTimeout(() => {
      setLoading(0);
    }, 2000);
  }, []);
  for (let i = 0; i < colors.length; i++) {
    if (colors[i].id == data[0].colorId) {
      productDetail["color"] = colors[i].name;
      break;
    }
  }
  for (let i = 0; i < material.length; i++) {
    if (material[i].id == data[0].colorId) {
      productDetail["material"] = material[i].name;
      break;
    }
  }
  console.log("Product detail: ", productDetail);
  return (
    <div className="detail-section mt-5">
      {loading == true && <Loading />}
      {loading == false && (
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: false,
                    src: productDetail.image,
                    width:330,
                    height: 500,
                  },
                  largeImage: {
                    src: productDetail.image,
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div>
              <h2>{productDetail.name}</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
                tempora aliquid! Ea hic voluptatibus aliquam rerum accusamus.
                Sed temporibus numquam magnam nobis architecto. Nesciunt ducimus
                porro quam. Minus, aliquid aperiam.
              </p>
              <h6 className="mt-3">Material - {productDetail.material} </h6>
              <h6 className="mt-3">Color - {productDetail.color} </h6>
              <p className="mt-3">
                <b>INR {productDetail.price}.00</b>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
