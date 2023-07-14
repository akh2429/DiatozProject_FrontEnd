import { createSlice } from "@reduxjs/toolkit";

const navBarSearch = createSlice({
    name: "navBarSearch",
    initialState: "",
    reducers: {
        navbarsearchQuery: (state, action) => {
            const query = action.payload;
            return query
        },
    },
});

export const { navbarsearchQuery } = navBarSearch.actions;
export default navBarSearch.reducer;