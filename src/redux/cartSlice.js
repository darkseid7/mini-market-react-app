import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: JSON.parse(localStorage.getItem("cartProducts")) || [],
    totalPrice: JSON.parse(localStorage.getItem("cartTotalPrice")) || 0,
    showShoppingCart: false,
  },

  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === productToAdd.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...productToAdd, quantity: 1 });
      }

      state.totalPrice += productToAdd.price;

      localStorage.setItem("cartProducts", JSON.stringify(state.products));
      localStorage.setItem("cartTotalPrice", JSON.stringify(state.totalPrice));
    },

    removeFromCart: (state, action) => {
      const { productId, quantityToRemove } = action.payload;
      const productToRemove = state.products.find(
        (product) => product.id === productId
      );

      if (productToRemove) {
        if (productToRemove.quantity <= quantityToRemove) {
          state.totalPrice -= productToRemove.price * productToRemove.quantity;
          state.products = state.products.filter(
            (product) => product.id !== productId
          );
        } else {
          productToRemove.quantity -= quantityToRemove;
          state.totalPrice -= productToRemove.price * quantityToRemove;
        }
      }

      localStorage.setItem("cartProducts", JSON.stringify(state.products));
      localStorage.setItem("cartTotalPrice", JSON.stringify(state.totalPrice));
    },

    removeAllFromCart: (state) => {
      state.products = [];
      state.totalPrice = 0;

      localStorage.setItem("cartProducts", JSON.stringify(state.products));
      localStorage.setItem("cartTotalPrice", JSON.stringify(state.totalPrice));
    },

    setShowShoppingCart: (state, action) => {
      state.showShoppingCart = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllFromCart,
  setShowShoppingCart,
} = cartSlice.actions;
export default cartSlice.reducer;
