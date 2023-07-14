import { createSlice } from "@reduxjs/toolkit";

const checkboxFilters = createSlice({
    name: "checkboxFilters",
    initialState: {
        selectedColors: [],
        selectedGenders: [],
        selectedPrices: [],
        selectedTypes: [],
    },
    reducers: {
        colourcheckIn: (state, action) => {
            const recivedColour = action.payload;
            state.selectedColors.push(recivedColour)
        },
        colourcheckOut: (state, action) => {
            const recivedColour = action.payload;
            const index = state.selectedColors.findIndex((value) => value === recivedColour);
            state.selectedColors.splice(index, 1)
        },
        gendercheckIn: (state, action) => {
            const recivedGender = action.payload;
            state.selectedGenders.push(recivedGender)
        },
        gendercheckOut: (state, action) => {
            const recivedGender = action.payload;
            const index = state.selectedGenders.findIndex((value) => value === recivedGender);
            state.selectedGenders.splice(index, 1)
        },
        pricecheckIn: (state, action) => {
            const recivedPrice = action.payload;
            state.selectedPrices.push(recivedPrice)
        },
        pricecheckOut: (state, action) => {
            const recivedPrice = action.payload;
            const index = state.selectedPrices.findIndex((value) => value === recivedPrice);
            state.selectedPrices.splice(index, 1)
        },
        typecheckIn: (state, action) => {
            const recivedType = action.payload;
            state.selectedTypes.push(recivedType)
        },
        typecheckOut: (state, action) => {
            const recivedType = action.payload;
            const index = state.selectedTypes.findIndex((value) => value === recivedType);
            state.selectedTypes.splice(index, 1)
        },

    },
});

export const { colourcheckIn, colourcheckOut, gendercheckIn, gendercheckOut, pricecheckIn, pricecheckOut, typecheckIn, typecheckOut } = checkboxFilters.actions;
export default checkboxFilters.reducer;