import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isVisible: false,
        deneme: "",
    },
    reducers: {
        showCart(state,action) {
            state.isVisible = true;
        },
        addCart(state,action) {
            state.deneme = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        });
    },
});

export const { showCart, addCart } =
    cartSlice.actions;

export default cartSlice.reducer;
