import { createSlice } from "@reduxjs/toolkit";

const mobileFilter = createSlice({
    name: "mobileFilter",
    initialState: false,
    reducers: {
        menuOpen: (state) => {
            if (state === false) {
                return true
            } else {
                return false
            }
        },
    },
});

export const { menuOpen } = mobileFilter.actions;
export default mobileFilter.reducer;
