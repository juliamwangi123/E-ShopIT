import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state, action) =>{
            const itemExists = state.cart.find((item) => item._id === action.payload._id );
            if(itemExists){console.log(itemExists.quantity +=1)}
            else{
                state.cart.push(action.payload)
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },
        removeItem:(state,action) =>{
            const removedItem = state.cart.filter((item)=> item._id !== action.payload._id);
            state.cart = removedItem;

        },
        addQuantity:(state, action) =>{
            const increaseQuantity = state.cart.find((item)=> item._id === action.payload._id);
            increaseQuantity.quantity++
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
          },
        
    }

});

export const{addItem, removeItem,addQuantity,decrementQuantity } = cartSlice.actions

export default cartSlice.reducer