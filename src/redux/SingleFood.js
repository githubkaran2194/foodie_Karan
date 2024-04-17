import { createSlice } from "@reduxjs/toolkit";

const FoodPerItemSlice = createSlice({
    name:"foodPerItem",
    initialState:{
        items : []
    },reducers:{
        itemsAddToDetails :(state, action)=>{
            state.items.push(action.payload);
        }
    }
})

export const {itemsAddToDetails}=FoodPerItemSlice.actions;
export default FoodPerItemSlice.reducer