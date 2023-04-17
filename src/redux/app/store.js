import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/auth/loginSlice';
import signUpReducer from '../features/auth/signupSlice'
import productReducer from "../features/products/productSlice";
import productDetaiilsReducer from "../features/products/productDetailsSlice";


const store = configureStore({
    reducer:{
        authLogin:loginReducer, 
        authSignUp:signUpReducer,
        products:productReducer,
        product:productDetaiilsReducer

    }
});

export default store;