import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[ ],
    },
    reducers:{
        addItem:(state, action)=>{
            //mutating the state over here i.e modifying the state
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            // state=[];   this will not work becoz it only change the reference the state or loacl variable not the original state.
            //console.log(state);// it will print some proxy object
            //console.log(current(state));//to print the state
            state.items.length=0;
        },
    },
});

export const {addItem, removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;