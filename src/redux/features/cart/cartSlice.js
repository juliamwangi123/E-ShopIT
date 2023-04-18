import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state, action) =>{
            const itemExists = state.cart.find(item => item.id === action.payload.id );
            if(itemExists){console.log(itemExists.id)}
            state.cart.push(...action.payload)
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeItem:(state,action) =>{
            const removedItem = state.cart.filter((item)=> item.id !== action.payload.id);
            state.cart = removedItem;

        },
        addQuantity:(state, action) =>{
            const increaseQuantity = state.cart.find((item)=> item.id === action.payload.id);
            increaseQuantity.quantity++
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
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