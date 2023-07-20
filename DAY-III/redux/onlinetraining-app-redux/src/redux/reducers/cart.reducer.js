import { createSlice } from "@reduxjs/toolkit";
let initialState = [];
export const cartSlice = createSlice({
  name: "cartitems",
  initialState,
  reducers: {
    addItemToCart: (store, action) => {
      let newCourseToBeAddedToCart = action.payload;
      store.push(newCourseToBeAddedToCart);
      return store;
    },
    removeItemFromCart: (store, action) => {
      let courseId = action.payload;
      return store.filter(c => c.id !== courseId);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
