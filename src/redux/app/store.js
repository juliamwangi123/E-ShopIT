import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/auth/loginSlice';
import signUpReducer from '../features/auth/signupSlice'
import productReducer from "../features/products/productSlice";
import productDetaiilsReducer from "../features/products/productDetailsSlice";
import cartReducer from "../features/cart/cartSlice";
import oauthReducer from "../features/auth/oauthSlice"


const store = configureStore({
    reducer:{
        authLogin:loginReducer, 
        authSignUp:signUpReducer,
        products:productReducer,
        productDetails:productDetaiilsReducer,
        cart:cartReducer,
        oauth:oauthReducer,

    }
});

export default store;