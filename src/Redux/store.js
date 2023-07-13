import { configureStore } from '@reduxjs/toolkit';
import products from './ItemSlice';
import cart from './cartSlice';
import mobileFilter from './MobileFilterSlice';
const store = configureStore({
    reducer: {
        products: products,
        cart: cart,
        mobileFilter: mobileFilter
    },
});
export default store;
