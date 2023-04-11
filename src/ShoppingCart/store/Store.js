import {configureStore} from '@reduxjs/toolkit';
import MyCartSlice from './MyCartSlice';
import ProductSlice from './ProductSlice';

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    cart: MyCartSlice,
  },
});
