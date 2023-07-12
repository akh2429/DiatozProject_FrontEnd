import { configureStore } from "@reduxjs/toolkit";
import products from "./ItemSlice";
const store = configureStore({
    reducer: {
        products: products.reducer
    }
})