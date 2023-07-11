import { createSlice } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
    name: 'expense',
    initialState: { count: 0, total: 0, data: [] },
    reducers: {
        updateBudget: (state, actions) => {
            state.count = actions.payload?.count
            state.data = actions.payload?.data
            state.total = actions.payload?.total
        }
    }
})

export const { updateBudget } = budgetSlice.actions
export default budgetSlice.reducer