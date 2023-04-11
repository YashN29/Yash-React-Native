import {configureStore} from '@reduxjs/toolkit';
import Countreducer from './Countreducer';

const store = configureStore({
  reducer: {
    count: Countreducer,
  },
});

export default store;
