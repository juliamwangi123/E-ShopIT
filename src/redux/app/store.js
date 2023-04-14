import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/auth/loginSlice';


const store = configureStore({
    reducer:{
        auth:loginReducer
    }
});

export default store;