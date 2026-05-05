//Toolkit
//Store, Reducer, Actions

import { configureStore } from "@reduxjs/toolkit";
import CartCountReducer from "./cartCountSlice"
import productReducer from "./productSlice"

//Store, Slices(Reducer->Actions)
const store=configureStore({
    reducer:{
        cartCount:CartCountReducer,
        products:productReducer

    }
})
export type RootState=ReturnType<typeof store.getState>
export default store;