import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERORR: "error",
  LOADING: "loading",
});

const featuredProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setFeaturedProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFeaturedProduct, setStatus } = featuredProductSlice.actions;
export default featuredProductSlice.reducer;

// THUNKS
export function fetchFeaturedProducts() {
  return async function fetchFeaturedProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
    const url =
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured";
    try {
      axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          dispatch(setFeaturedProduct(res.data));
          dispatch(setStatus(STATUSES.IDLE));
        });
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERORR));
    }
  };
}
