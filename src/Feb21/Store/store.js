import { configureStore } from "@reduxjs/toolkit";
import Reducer from './Reducer';

const store = configureStore({
    reducer: {loginDetails : Reducer
    },
})

export default store;