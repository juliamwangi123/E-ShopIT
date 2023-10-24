import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState ={
    isAuthenticated: false,
    user: null,
    token: null,
    // status: 'idle',
    error: null,
    loading:false
};

export const login = createAsyncThunk('auth/login', async(data )=>{

        const config = {
            headers:{'Content-Type': 'application/json' }
        }
    try{
        const res = await axios.post('https://backend-iota-mauve.vercel.app/login/', data, config);
        const { token, user } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', user._id)
        return { token, user };
    } catch (error) {
        throw new Error(error.response.data.error); // Throw the error to be handled by createAsyncThunk
      }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cart')
    localStorage.removeItem('total')
    localStorage.removeItem('userId')
    delete axios.defaults.headers.common['Authorization'];
  });

const loginSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(login.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(login.fulfilled, (state,action)=>{
            state.error=null
            state.isAuthenticated = true
            state.token = action.payload.token
            state.user = action.payload.user 
            state.loading= false     
        })
        builder.addCase(login.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message    
        })
        .addCase(logout.fulfilled, (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.loading = false;
            state.error = null;
          });   
    }

})

export default loginSlice.reducer;