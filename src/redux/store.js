import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./itemSlice"
export const mystore=configureStore({
    reducer:{
        fooditem:itemSlice,
    }
})