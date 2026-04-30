/*
Parent Component ->Data->Child Compoenents

Props
Context - Global Data Simple 

Redux
Store->Centralized Storage

Store, Actions, Reducer

1. Store->Centralized Storage
2. Actions ->Events
3. Reducer ->Event HAndler
(existingStoreState,action)
Logical Operations
must return updatedStore


1. Desgin the Store.
2. Define Actions
3. Create Reducer
4. Setup Store

1. Design the Store
    Structure
    BugTracking
        Bugs(description, resolved, id)
        [
            {
                id:number,
                description:string,
                resolved:boolean
            }
        ]
            1 Slice, 1 Reducer
        ECommerce
        {
            carts:[
                {
                    productid:number,
                    qty:number
                },{}
            ],
            userAuth:{},
            favourites:[{productid:int},{}]
            
        
        }
            3 Slices, 3 Reducer
2. Actions ->Object
Add,Delete,resolve

Bug Add
{
    type:"ADD",
    payload:{
       description:string
    }
}
Bug Delete
{
    type:"Delete",
    payload:{
            id:number
    }
}
    Bug Resolve
    {
        type:"Resolve",
        payload:{
                id:number;
        }
    }

    3. Reducer
    Plain javascript function (Pure Function)
    (existingStoreState,action)
    Logical
    must return updateStoreState
*/

import { createStore } from "redux"

//1. Design a Store->Structure 
//array of Object
type StoreType={
    id:number,
    description:string,
    resolved:boolean
}
//2. Actions
type AddBugType={
    type:"Add",
    payload:{
        description:string
    }
}
type DeleteBugType={
    type:"Delete",
    payload:{
        id:number
    }

}
type ResolveBugType={
    type:"Resolve",
    payload:{
        id:number
    }

}
type BugActions=AddBugType|DeleteBugType|ResolveBugType;
//3. Reducer
let lastid=1;
function BugReducer(state:StoreType[]=[],action:BugActions)
{

    if(action.type=="Add")
    {
       // const currentState=state;//Shallow Copy
       //Deep Copy
       const currentState=[...state]
       // ...state->objects
       //[...state]->Array of Objects 
       currentState.push({
        id:lastid,
        description:action.payload.description,
        resolved:false
       })
       lastid++;

       return currentState;

    }
     if(action.type=="Resolve")
    {
        const currentState=state.map((item)=>{
            if(item.id==action.payload.id)
                item.resolved=true;

            return item;
        })

        return currentState;

    }
      if(action.type=="Delete")
    {
        const currentState=state.filter((item)=>{
            if(item.id!=action.payload.id)
                return true;

            
        })

        return currentState;

    }
return state;
}
//4 Setup Store
const store=createStore(BugReducer);
console.log(store.getState())

store.dispatch({
    type:"Add",
    payload:{
        description:"First Bug"
    }
});
console.log(store.getState());



store.dispatch({
    type:"Resolve",
    payload:{
        id:1
    }
});
console.log(store.getState());


store.dispatch({
    type:"Delete",
    payload:{
        id:1
    }
});
console.log(store.getState());
