import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERORR: "error",
  LOADING: "loading",
});
const colorSlice = createSlice({
  name: "color",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setColor(state, action) {
        state.data = action.payload
    },
    setStatus(state, action) {
        state.status = action.payload
    },
  },
});
export const { setColor, setStatus } = colorSlice.actions;
export default colorSlice.reducer;

// THUNK
export function fetchColor() {
  return async function fetchColorThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.IDLE));
    const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
    const url1 =
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors";
    try {
      axios
        .get(url1, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          dispatch(setColor(res.data.colors));
          dispatch(setStatus(STATUSES.IDLE));
        });
    } catch (error) {
      // console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
