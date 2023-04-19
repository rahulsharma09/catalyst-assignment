import { configureStore } from "@reduxjs/toolkit";
import ProductReduer from './productSlice';
import ColorReducer from './colorSlice';
import materialReducer from './materialSlice';
import cartReducer from './cartSlice';
import featuredProductReducer from './featuredSlice'

const store = configureStore({
    reducer:{
        product: ProductReduer,
        color: ColorReducer,
        material: materialReducer,
        cart: cartReducer,
        featured: featuredProductReducer
    }
})

export default store;