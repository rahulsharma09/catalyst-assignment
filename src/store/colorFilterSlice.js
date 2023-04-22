import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERORR: "error",
  LOADING: "loading",
});

const colorFilterSlice = createSlice({
  name: "colorFilter",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setFilteredProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilteredProduct, setStatus } = colorFilterSlice.actions;
export default colorFilterSlice.reducer;

// THUNK
export function filterColorProducts(id) {
  return async function filterColorProductsThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
    const url =
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products";
    try {
      axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          let materialProducts = [];
          let products = res.data.products;
          products.map((product) => {
            if (product.colorId == id) {
              materialProducts.push(product);
            }
          });
          dispatch(setFilteredProduct(materialProducts));
          dispatch(setStatus(STATUSES.IDLE));
        });
    } catch (error) {
      // console.log(error);
      dispatch(setStatus(STATUSES.ERORR));
    }
  };
}