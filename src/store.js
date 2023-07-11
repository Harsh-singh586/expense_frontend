import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from './expense/expenseSlice'
import budgetReducer from './budget/budgetSlice'
import categoryReducer from './expense/categorySlice'

export default configureStore({
    reducer: {
        expense: expenseReducer,
        budget: budgetReducer,
        category: categoryReducer
    }
})