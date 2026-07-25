import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './slices/ui.slice.js'
import cartSlice from "./slices/cart.slice.js";
import productsSlice from "./slices/products.slice.js";

const store = configureStore({
    reducer: {ui: uiSlice, cart: cartSlice, products: productsSlice},
})

export default store;