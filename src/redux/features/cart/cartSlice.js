import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cart:[],
    total: 0,
    totalItems: 0, 
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state, action) =>{
            const getCartItem = JSON.parse(localStorage.getItem('cart')) || [];
            const itemExists = getCartItem?.find((item) => item?._id === action.payload._id );

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
            
            const getCartItem =JSON.parse(localStorage.getItem('cart')) || [];
            const removeItem = getCartItem?.filter((item)=> item?._id !== action.payload._id)
            localStorage.setItem('cart', JSON.stringify(removeItem))
        },
        addQuantity:(state, action) =>{
            const getCartItem = JSON.parse(localStorage.getItem('cart')) || [];
            const itemExists = getCartItem?.find((item) => item?._id === action.payload._id );

            if(itemExists){
                itemExists.quantity +=1
                localStorage.setItem('cart', JSON.stringify(getCartItem)); 
            }
        },
        decrementQuantity: (state, action) => {
            const getCartItem = JSON.parse(localStorage.getItem('cart')) || [];
            const itemExists = getCartItem?.find((item) => item?._id === action.payload._id );

            if(itemExists){
                if(itemExists.quantity === 1){
                    itemExists.quantity =1
                }else{
                    itemExists.quantity -=1
                    localStorage.setItem('cart', JSON.stringify(getCartItem)); 

                }
            }
          },
        clearCart:() =>{
            localStorage.removeItem('cart') 
            localStorage.removeItem('total')
            
        },
        getTotal:(state) =>{
            const getCartItem = JSON.parse(localStorage.getItem('cart')) || [];
                const totalCart = getCartItem?.map((item)=>{
                return item?.price * item?.quantity})
            
                if(totalCart.length >0){
                    const total = totalCart.reduce((previousValue, currentValue) => {
                        return  previousValue + currentValue})
          
                        state.total = total
                        localStorage.setItem('total',JSON.stringify(total))
                      
                }   
        },
        getCartLength: (state) => {
            const getCartItem = JSON.parse(localStorage.getItem("cart")) || [];
            state.totalItems = getCartItem?.length;
          },
        
        
    }

});

export const{addItem, removeItem,addQuantity,decrementQuantity,clearCart,getTotal,getCartLength } = cartSlice.actions

export default cartSlice.reducer