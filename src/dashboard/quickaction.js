import IncomePopup from "../income/popup"
import ExpensePopup from "../expense/popup"
import BudgetPopup from "../budget/popup"
import { useState } from "react"
import { useSelector } from "react-redux"

export default function Quickaction(props) {

    const [showIncomePopup, setshowIncomePopup] = useState(false)
    const [showExpensePopup, setshowExpensePopup] = useState(false)
    const [showBudgetPopup, setShowBudgetPopup] = useState(false)

    const changeShowIncomePopoup = () => {
        setshowIncomePopup(!showIncomePopup)
    }

    const changeShowExpensePopoup = () => {
        setshowExpensePopup(!showExpensePopup)
    }

    const changeShowBudgetPopup = () => {
        setShowBudgetPopup(!showBudgetPopup)
    }

    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-2 space-x-4'>
                <button className='p-2 border text-green-700 border-green-700 rounded-lg w-[90%]' onClick={changeShowIncomePopoup}>Add Income</button>
                <button className='p-2 border text-green-700 border-green-700 rounded-lg w-[90%]' onClick={changeShowExpensePopoup}>Add Expense</button>
            </div>
            <div className="flex justify-center items-center">
                <button className='p-2 border text-green-700 border-green-700 rounded-lg w-[90%]' onClick={changeShowBudgetPopup}>Add Budget</button>
            </div>
            <div className={`${!showExpensePopup ? 'hidden' : ''}`}>
                <ExpensePopup visibilityfunc={changeShowExpensePopoup} expenseRefetch={props.expenseRefetch} categoryRefetch={props.categoryRefetch}></ExpensePopup>
            </div>
            <div className={`${!showIncomePopup ? 'hidden' : ''}`}>
                <IncomePopup visibilityfunc={changeShowIncomePopoup} incomeRefetch={props.incomeRefetch}></IncomePopup>
            </div>
            <div className={`${showBudgetPopup ? '' : 'hidden'}`}>
                <BudgetPopup visibilityfunc={changeShowBudgetPopup} budgetRefetch={props.budgetRefetch}></BudgetPopup>
            </div>
        </>
    )
}