import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERORR: "error",
  LOADING: "loading",
});

const materialSlice = createSlice({
    name: "material",
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        setMaterial(state, action){
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        }
    }
})

export const {setMaterial, setStatus} = materialSlice.actions;
export default materialSlice.reducer;

// THUNK

export function fetchMaterial(){
    return async function fetchMaterialThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING));
        const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
    const url =
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material";
        try {
            axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          dispatch(setMaterial(res.data.material));
          dispatch(setStatus(STATUSES.IDLE));
        });
        } catch (error) {
            // console.log(error)
            dispatch(setStatus(STATUSES.ERORR))
        }
    }
}