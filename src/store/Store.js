import { configureStore } from "@reduxjs/toolkit";
import ProductReduer from './productSlice';
import ColorReducer from './colorSlice';
import materialReducer from './materialSlice';
import cartReducer from './cartSlice';
import featuredProductReducer from './featuredSlice'
import materialFilterReducer from './materialFilterSlice'
import colorFilterReducer from './colorFilterSlice'

const store = configureStore({
    reducer:{
        product: ProductReduer,
        color: ColorReducer,
        material: materialReducer,
        cart: cartReducer,
        featured: featuredProductReducer,
        materialFilter: materialFilterReducer,
        colorFilter: colorFilterReducer
    }
})

export default store;