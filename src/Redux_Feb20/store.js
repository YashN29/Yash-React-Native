import {configureStore,combineReducers} from '@reduxjs/toolkit'
import countReducer from './reducers/countReducer';


 const store = configureStore({
    reducer: {
      count:countReducer,
      count1:countReducer
    },
  })

export default store;
