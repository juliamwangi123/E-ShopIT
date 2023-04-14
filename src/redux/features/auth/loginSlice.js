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
    
        const res = await axios.post('https://backend-production-33e4.up.railway.app/login', data, config);
        const { token, user } = res.data;
        localStorage.setItem('token', token);
        return { token, user };
})

export const logout = createAsyncThunk('auth/logout', async () => {
    localStorage.removeItem('token');
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