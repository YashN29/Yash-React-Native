import {createSlice} from '@reduxjs/toolkit';

const myCartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id === action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.push({
          id: action.payload.id,
          price: action.payload.price,
          publisher: action.payload.price,
          qty: action.payload.qty + 1,
          thumbnail: action.payload.thumbnail,
          title: action.payload.title,
        });
      } else {
        state[myindex].qty = state[myindex].qty + 1;
      }
    },
    removeItem(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id === action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty - 1;
      }
    },
    deleteItem(state, action) {
      return (state = state.filter(item => item.id != action.payload));
    },
  },
});

export const {addToCart, removeItem, deleteItem} = myCartSlice.actions;
export default myCartSlice.reducer;
