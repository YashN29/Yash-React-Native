import { configureStore } from "@reduxjs/toolkit";
import Reducer from './Reducer';

const store = configureStore({
    reducer: {loginDetails : Reducer}
})
console.log(store.getState().loginDetails)

export default store;