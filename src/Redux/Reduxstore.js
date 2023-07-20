import { configureStore } from '@reduxjs/toolkit';
import products from './ProductsSlice';
import signUpSlice from "./signupSlice"
import loginSlice from "./loginSlice"

const store = configureStore({
    reducer: {
        products: products,
        signUpSlice: signUpSlice,
        loginSlice: loginSlice
    },
});
export default store;
