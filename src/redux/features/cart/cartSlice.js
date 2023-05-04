import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cart:[],
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state, action) =>{
            const getCartItem = JSON.parse(localStorage.getItem('cart')) || [];
            const itemExists = getCartItem.find((item) => item._id === action.payload._id );

            if(itemExists){
                itemExists.quantity +=1
                localStorage.setItem('cart', JSON.stringify(getCartItem)); 
            }
            else{
                state.cart.push(action.payload)
                localStorage.setItem('cart', JSON.stringify([...getCartItem , action.payload]));
            }
        },
        removeItem:(state,action) =>{
            const removedItem = state.cart.filter((item)=> item._id !== action.payload._id);
            state.cart = removedItem;

        },
        addQuantity:(state, action) =>{
            const getCartItem = JSON.parse(localStorage.getItem('cart')) || [];
            const itemExists = getCartItem.find((item) => item._id === action.payload._id );

            if(itemExists){
                itemExists.quantity +=1
                localStorage.setItem('cart', JSON.stringify(getCartItem)); 
            }
        },
        decrementQuantity: (state, action) => {
            const getCartItem = JSON.parse(localStorage.getItem('cart')) || [];
            const itemExists = getCartItem.find((item) => item._id === action.payload._id );

            if(itemExists){
                if(itemExists.quantity === 1){
                    itemExists.quantity =1
                }else{
                    itemExists.quantity -=1
                    localStorage.setItem('cart', JSON.stringify(getCartItem)); 

                }
            }
          },
        
    }

});

export const{addItem, removeItem,addQuantity,decrementQuantity } = cartSlice.actions

export default cartSlice.reducer