import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: 'expense',
    initialState: { count: 0, total: 0, data: [] },
    reducers: {
        updateExpense: (state, actions) => {
            state.count = actions.payload?.count
            state.data = actions.payload?.data
            state.total = actions.payload?.total
        }
    }
})

export const { updateExpense } = expenseSlice.actions
export default expenseSlice.reducer