import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState ={
    isAuthenticated: false,
    user: null,
    token: null,
    // status: 'idle',
    error: null,
    loading:false
};

export const signup = createAsyncThunk('auth/signup', async({email, password})=>{

    const data = {email, password};

    try{
        const res = await axios.post('https://backend-production-ad2e.up.railway.app/signup/', 
                            data, 
                            {headers:{'Content-Type': 'application/json' }
                            });
    //get the token after posting 
    const {token,user } =res.data;
    console.log(res)

    localStorage.setItem('token', token);
    return {token,user}
    }
    catch (error) {
        throw new Error(error.response.data.error); // Throw the error to be handled by createAsyncThunk
      }

})

const signupSlice = createSlice({
    name:'signup',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(signup.pending, (state, action)=>{
            state.loading = true
        });
        builder.addCase(signup.fulfilled, (state, action)=>{
            state.error=null
            state.isAuthenticated = true
            state.token = action.payload.token
            state.user = action.payload.user 
            state.loading= false  
        });
        builder.addCase(signup.rejected, (state, action)=>{
            state.error=action.error.message
            state.isAuthenticated = false
            state.token = null
            state.user = [] 
            state.loading= false 

        })
    }
});

export default signupSlice.reducer