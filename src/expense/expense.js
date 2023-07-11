import { useSelector } from "react-redux"
import MonthSelector from "./monthSelector"
import { getYearMonthList } from "../utis"
import { useState } from "react"
import { useQuery } from "react-query"
import { getDateGroup, getExpense, getCategoryData } from "../utis"
import { CategoryData, DateData } from "./dataDisplay"

function getMonthYear(combine_str) {
    let year = parseInt(combine_str.split("-")[0])
    let month = parseInt(combine_str.split("-")[1])
    return [year, month]
}

export default function Expense() {
    console.log('expense loads')
    var expenses = useSelector((state) => state.expense)
    const budget = useSelector((state) => state.budget)
    var categoryExpense = useSelector((state) => state.category)
    var monthList = getYearMonthList()
    const [selectedMonth, setSelectedMonth] = useState(monthList[monthList.length - 1].value)
    const [viewSelected, setViewSelected] = useState(0)
    var destructured_param = getMonthYear(selectedMonth)
    var { isLoading: isExpenseDateLoading, isError: isExpenseDateError, data: expenseDateData, error: expenseDateError, refetch: expenseDateRefetch } = useQuery(['expenses', selectedMonth], () => getDateGroup(destructured_param[1] + 1, destructured_param[0]), { retry: false })
    var { isLoading: isExpenseDataLoading, isError: isExpenseDataError, data: expenses, error: expenseDataError, refetch: expenseDataRefetch } = useQuery(['expense', selectedMonth], () => getExpense(destructured_param[1] + 1, destructured_param[0]), { retry: false })
    var { isLoading: isCategoryLoading, isError: isCategoryError, data: categoryExpense, error: categoryError, refetch: categoryRefetch } = useQuery(['category', selectedMonth], () => getCategoryData(destructured_param[1] + 1, destructured_param[0]), { retry: false })

    console.log('month', selectedMonth)

    const changeSelectedMonth = (val) => {
        //expenseDataRefetch()
        //categoryRefetch()
        setSelectedMonth(val)
    }

    console.log('category_expense', categoryExpense)
    console.log('---------------month', selectedMonth)

    var percent = budget?.total === 0 ? 0 : (expenses?.total / budget?.total) * 100

    return (
        <div className="p-6 w-full space-y-10">
            <div className="grid grid-cols-2 w-full">
                <div className="space-y-5">
                    <p>Budget Left</p>
                    <div className="h-3 w-full bg-slate-400 rounded-xl">
                        <div style={{ width: `${percent <= 100 ? percent : 100}%` }} className={`h-3 ${percent > 100 ? 'bg-red-600' : 'bg-slate-900'} rounded-xl red`}></div>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <MonthSelector monthList={monthList} changeSelectedMonth={changeSelectedMonth} selectedMonth={selectedMonth}></MonthSelector>
                </div>
            </div >
            <div>

                <div className="grid grid-cols-2">
                    <div className={`border-8 p-4 ${viewSelected === 0 ? 'border-b-0' : 'bg-slate-400'}`} onClick={() => setViewSelected(0)}>
                        Last Transactions
                    </div>
                    <div className={`border-8 p-4 ${viewSelected === 1 ? 'border-b-0' : 'bg-slate-400'}`} onClick={() => setViewSelected(1)}>
                        Category Data
                    </div>
                </div>
                {viewSelected === 0 ? <DateData expenseDateData={expenseDateData} expense={expenses}></DateData> : <CategoryData categorydata={categoryExpense} expense={expenses}></CategoryData>}
            </div>
        </div>
    )
}