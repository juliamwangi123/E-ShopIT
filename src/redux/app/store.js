import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/auth/loginSlice';
import signUpReducer from '../features/auth/signupSlice'
import productReducer from "../features/products/productSlice";
import productDetaiilsReducer from "../features/products/productDetailsSlice";
import cartReducer from "../features/cart/cartSlice";


const store = configureStore({
    reducer:{
        authLogin:loginReducer, 
        authSignUp:signUpReducer,
        products:productReducer,
        productDetails:productDetaiilsReducer,
        cart:cartReducer

    }
});

export default store;