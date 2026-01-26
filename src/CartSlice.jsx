import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;                                                       // destructure prod details from action payload
      const existingItem = state.items.find(item => item.name === name);                                  // compare items to check if item exists in cart
      if (existingItem) {                                                                                 // increase quantity if item exists
        existingItem.quantity++;
      } else {                                                                                            // add to cart with 1 quantity if it does not exist
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {                                                                  // destructure name and new quant from action payload
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);                                  // find item in cart matching given name
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;                                                                 // update quant to ne value if item is found
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
