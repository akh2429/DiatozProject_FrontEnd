import { configureStore } from '@reduxjs/toolkit';
import products from './ProductsSlice';
import cart from './cartSlice';
import mobileFilter from './MobileFilterSlice';
import checkboxFilters from './checkboxFiltersSlice';
import navBarSearch from "../Redux/navbarSearchSlice"

const store = configureStore({
    reducer: {
        products: products,
        cart: cart,
        mobileFilter: mobileFilter,
        checkboxFilters: checkboxFilters,
        navBarSearch: navBarSearch
    },
});
export default store;
