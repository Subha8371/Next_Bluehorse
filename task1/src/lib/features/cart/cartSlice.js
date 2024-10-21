// lib/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
        // console.log(action.payload)
      state.items.push(action.payload);
    },
    remove: (state, action) => {
        // console.log(action.payload)
        state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { add,remove } = cartSlice.actions;
export default cartSlice.reducer;
