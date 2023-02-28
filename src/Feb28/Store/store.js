import {configureStore} from '@reduxjs/toolkit';
import quoteReducer from './quoteReducer';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = configureStore({reducer: quoteReducer},applyMiddleware(thunk));

export default store;