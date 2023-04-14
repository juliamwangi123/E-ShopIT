import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/auth/loginSlice';
import signUpReducer from '../features/auth/signupSlice'


const store = configureStore({
    reducer:{
        authLogin:loginReducer, 
        authSignUp:signUpReducer

    }
});

export default store;