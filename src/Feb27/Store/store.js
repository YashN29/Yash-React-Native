import {configureStore} from "@reduxjs/toolkit";
import Reducer from "./Reducer";

const store = configureStore({
    reducer: Reducer
})
console.log(store.getState())

export default store;