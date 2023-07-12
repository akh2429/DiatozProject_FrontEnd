import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
    name: "Tshirts",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {

    }
});
export default products;