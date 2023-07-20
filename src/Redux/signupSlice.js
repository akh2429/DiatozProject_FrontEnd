import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
};

export const signUpUser = createAsyncThunk(
    "signUpUsers",
    async (formData) => {
        try {
            const response = await axios.post('http://localhost:5050/register', formData);
            return response.data;
        } catch (error) {
            throw Error(error.response.data);
        }
    }
);

export const signUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default signUpSlice.reducer;
