import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERORR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// THUNKS
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
    const url =
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products";
    try {
      axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          dispatch(setProducts(res.data.products));
          dispatch(setStatus(STATUSES.IDLE));
        });
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERORR));
    }
  };
}
