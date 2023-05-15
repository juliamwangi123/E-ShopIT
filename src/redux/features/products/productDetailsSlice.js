import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    product: null,
    loading: false,
    error:'',
    status:'idle'

}

export const fetchProduct = createAsyncThunk('product/productDetails', async(id)=>{
    const getProduct = await axios.get(`https://backend-production-ad2e.up.railway.app/${id}`);
    const product = getProduct.data;
    return product;
});

const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    extraReducers :(builder) =>{
        builder.addCase(fetchProduct.pending, (state, action)=>{
            state.loading = true
        });
        builder.addCase(fetchProduct.fulfilled , (state, action)=>{
            state.loading = false
            state.status = 'Success';
            state.product = action.payload
            state.error = '';
        });
        builder.addCase(fetchProduct.rejected, (state, action)=>{
            state.loading = false
            state.status = 'Failed';
            state.product = null
            state.error = action.error.message
        });
    }
});

export default productDetailsSlice.reducer