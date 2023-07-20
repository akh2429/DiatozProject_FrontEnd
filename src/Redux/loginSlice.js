import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import jwtDecode from "jwt-decode";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const userLogin = createAsyncThunk(
    "loginUser",
    async (formData) => {
        try {
            const response = await axios.post('http://localhost:5050/login', formData);
            if (response.data.token) {
                localStorage.setItem("userToken", JSON.stringify(response.data));
                toast.success('Logged In Sucessfully');
            }
            const decoded = jwtDecode(response.data.token);
            return decoded;
        } catch (error) {
            throw Error(error.response.data);
        }
    }
);

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default loginSlice.reducer;
