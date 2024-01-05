import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     id: null,
//     title: null,
//     imgUrl: null,
   
// }

export const categorieSlice = createSlice({
    name:"food",
    initialState:[],
    reducers:{
        foodCategory:(state,action) => {
            state.foodCategory = action.payload;
        }
    }
})


export const { foodCategory } = categorieSlice.actions
export const selectfoodCategory = state => state.food.food;
export default categorieSlice.reducer;