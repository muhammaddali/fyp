import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products.push({ ...action.payload, amount: 1 });
        },
        clearCart: (state) => {
            state.products = [];
        },
        increamentProductAmount: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product) {
                product.amount++;
            }
        },
        decreamentProductAmount: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product && product.amount > 0) {
                product.amount--;
            }
        }
    }
});

export const cartProducts = state => state.cart.products;
export const { addToCart, clearCart, increamentProductAmount, decreamentProductAmount } = cartSlice.actions;

export default cartSlice.reducer;
