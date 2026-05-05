import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface ICartCount{
    value:number
}
const initialCartCount:ICartCount={
    value:0
}

const cartCountSlice=createSlice({
    name:'cartCount',
    initialState:initialCartCount,
    reducers:{
        increment:(state)=>{
            state.value+=1;
            
        },decrement:(state)=>{
            state.value-=1;
        },
        incrementByAmount:(state,action:PayloadAction<number>)=>{
            state.value+=action.payload;


        }
    }
})
//functions
export const {increment,decrement,incrementByAmount}=cartCountSlice.actions;
export default cartCountSlice.reducer;

