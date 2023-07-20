import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const products = createSlice({
    name: "Tshirts",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error
            })
    }
});

export const fetchProducts = createAsyncThunk(
    "fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
            const products = response.data.map((prod) => ({ ...prod, cart: [] }));
            return products;
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
);


export default products.reducer;