import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import reducer from "./cartCountSlice"

interface Products{
    title:string,
    description:string
}
export interface IProductState{
    items:Products[],
    status:boolean
}

const InitialProductState:IProductState={
    items:[],
    status:false
}
export const fetchProducts=createAsyncThunk("products",async()=>{

     const response=await fetch("https://dummyjson.com/products");
     const output=await response.json();
     return output.products;

})

const productSlice=createSlice({
    name:'products',
    initialState:InitialProductState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action:PayloadAction<Products[]>)=>{
            state.items=action.payload;
            state.status=true;
        })

    }
}

)

export default productSlice.reducer;