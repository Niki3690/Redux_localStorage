import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

let Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD(state, action) {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    REMOVE(state, action) {
      const updatedState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    },

    INCREMENT(state, action) {
      let item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    DECREMENT(state, action) {
      let item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export let { ADD, REMOVE, INCREMENT, DECREMENT } = Cartslice.actions;
export default Cartslice.reducer;
