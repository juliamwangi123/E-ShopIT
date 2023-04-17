import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const initialState = {
    products :[],
    loading: false,
    error:'',
    status:'idle'
}

export const fetchProducts = createAsyncThunk('/products/fetchProducts', async()=>{
    const getProducts = await axios.get('https://backend-production-33e4.up.railway.app/products');
    const products =getProducts.data
    return products;
});


const productsSlice = createSlice({
    name:'products',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.products = action.payload.products;
            state.loading = false;
            state.status = 'Success';
            state.error = ''
        });
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.products = [];
            state.loading = false;
            state.status = 'Failed';
            state.error = action.error.message;
        })
    }
});

export default productsSlice.reducer