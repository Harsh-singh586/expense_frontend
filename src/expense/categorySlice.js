import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: 'category',
    initialState: { data: [] },
    reducers: {
        updateCategory: (state, actions) => {
            state.data = actions.payload?.data
        }
    }
})

export const { updateCategory } = categorySlice.actions
export default categorySlice.reducer