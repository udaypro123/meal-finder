import { createSlice } from "@reduxjs/toolkit";


export const itemSlice =createSlice({
    name:"fooditem",
    initialState:{
        dataitem:[],
        favirote:[],
    },
    reducers:{
        showdetailsitem(state,action){
            state.dataitem=action.payload;
        },
        faviroteitem(state,action){
            let items={...action.payload}
            state.favirote.push(items)
        },
    }

  
}) 

export const {showdetailsitem,faviroteitem}=itemSlice.actions
export default itemSlice.reducer;