import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
        const response = await fetch(
            "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        );
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export default products.reducer;