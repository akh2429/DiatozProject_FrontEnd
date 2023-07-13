import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                toast.success('Item Added to the cart');
            } else {
                toast.error('Item Already exist in the cart');
            }
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.find((val) => val.id === id);
            if (item.cartQuantity < item.quantity) {
                item.cartQuantity += 1;
            } else {
                toast.error(`Only ${item.quantity} quantities you can order`);
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
                    toast.error(
                        "Quantity can't be decreased less than 1, Please click on delete item if you want to Remove item from Cart"
                    );
                }
            }
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            const item = state.find((val) => val.id === id);
            if (item) {
                state.splice(state.indexOf(item), 1);
                toast.success('Item deleted from the cart');
            }
        },
    },
});

export const { add2Cart, increaseQuantity, decreaseQuantity, deleteItem } =
    cart.actions;
export default cart.reducer;
