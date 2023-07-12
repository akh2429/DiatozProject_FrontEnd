import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const cart = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add2Cart: (state, action) => {
            const item = action.payload;
            const addCartQuantity = { ...item, cartQuantity: 1 };
            const check = state.find((val) => val.id === item.id);
            if (!check) {
                state.push(addCartQuantity);
                Swal.fire({ title: 'Success', text: `Item Added to the cart`, icon: 'success' });
            } else {
                Swal.fire({ title: 'Error', text: `Item Already exist in the cart`, icon: 'error' });
            }
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.find((val) => val.id === id);
            if (item.cartQuantity < item.quantity) {
                item.cartQuantity += 1;
            } else {
                Swal.fire({ title: 'Error', text: `Only ${item.quantity} quantities you can order`, icon: 'error' });
                return
            }
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.find((val) => val.id === id);
            if (item) {
                if (item.cartQuantity > 1) {
                    item.cartQuantity -= 1;
                } else {
                    Swal.fire({ title: 'Error', text: "Quantity can't be decreased less than 1, Please click on delete item if you want to Remove item from Cart", icon: 'error' });
                }
            }
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            const item = state.find((val) => val.id === id);
            if (item) {
                state.splice(state.indexOf(item), 1);
            }
        },
    },
});

export const { add2Cart, increaseQuantity, decreaseQuantity, deleteItem } =
    cart.actions;
export default cart.reducer;
