import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cart:[],
    total:0
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
            
            const getCartItem =JSON.parse(localStorage.getItem('cart')) || [];
            const removeItem = getCartItem.filter((item)=> item._id !== action.payload._id)
            localStorage.setItem('cart', JSON.stringify(removeItem))
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
        clearCart:() =>{
            localStorage.removeItem('cart')
        },
        getTotal:(state) =>{
            const getCartItem = JSON.parse(localStorage.getItem('cart'));
             if(getCartItem){}
            const totalCart = getCartItem.map((item)=>{
                return item.price* item.quantity
            })

            if(totalCart && totalCart.length>0){
            const total = totalCart.reduce((previousValue, currentValue) => {
              return  previousValue + currentValue})

              state.total = total
              localStorage.setItem('total',JSON.stringify(total))
            }
        }
        
    }

});

export const{addItem, removeItem,addQuantity,decrementQuantity,clearCart,getTotal } = cartSlice.actions

export default cartSlice.reducer