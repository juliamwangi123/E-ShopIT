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


export const handleGoogleCallback = createAsyncThunk('auth/handleGoogleCallback', async (code) => {
    try {
      const res = await axios.post('https://backend-production-ad2e.up.railway.app/auth/google', { code }); 
      console.log(res)
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      return { token, user };
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  });
  

  const oauthSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
    
        builder.addCase(handleGoogleCallback.pending, (state, action) => {
          state.loading = true;
        });
        builder.addCase(handleGoogleCallback.fulfilled, (state, action) => {
          state.error = null;
          state.isAuthenticated = true;
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.loading = false;
        });
        builder.addCase(handleGoogleCallback.rejected, (state, action) => {
          state.error = action.error.message;
          state.isAuthenticated = false;
          state.token = null;
          state.user = null;
          state.loading = false;
        });
      }
      
  });
  
  export default oauthSlice.reducer