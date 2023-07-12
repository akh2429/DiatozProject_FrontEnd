import { configureStore } from '@reduxjs/toolkit';
import products from './ItemSlice';
import cart from './cartSlice';
const store = configureStore({
    reducer: {
        products: products,
        cart: cart
    },
});
export default store;
