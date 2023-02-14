//We import configureStore and our reducer
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

//We give a name to our reducer and we have it ready
export default configureStore({
    reducer: {
        todos: todoReducer,
    },
});