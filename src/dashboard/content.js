import { ChartBarSquareIcon } from '@heroicons/react/24/solid'
import PieChart from './piechart'
import Quickaction from './quickaction'
import { memo, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { updateExpense } from '../expense/expenseSlice'
import { updateBudget } from '../budget/budgetSlice'
import { getExpense, getBudget, getIncome, getCategoryData } from '../utis'
import ExpenseDataList from '../expense/expenseDataList'
import { updateCategory } from '../expense/categorySlice'


const Content = (props) => {
    console.log('content loades')
    const dispatch = useDispatch()

    const [availExpense, setAvailExpense] = useState(false)
    const [availIncome, setAvailIncome] = useState(false)
    const [availBudget, setAvailBudget] = useState(false)
    const [availCategoryData, setCategoryData] = useState(false)

    var { isLoading: isExpenseLoading, isError: isExpenseError, data: expenseData, error: expenseError, refetch: expenseRefetch } = useQuery('expense', () => getExpense(), { enabled: !availExpense, retry: false })
    var { isLoading: isBudgetLoading, isError: isBudgetError, data: budgetData, error: budgetError, refetch: budgetRefetch } = useQuery('budget', getBudget, { enabled: !availBudget, retry: false })
    var { isLoading: isIncomeLoading, isError: isIncomeError, data: incomeData, error: incomeError, refetch: incomeRefetch } = useQuery('income', getIncome, { enabled: !availIncome, retry: false })
    var { isLoading: isCategoryLoading, isError: isCategoryError, data: categoryData, error: categoryError, refetch: categoryRefetch } = useQuery('category', () => getCategoryData(), { enabled: !availIncome, retry: false })

    useEffect(() => {
        dispatch(updateExpense(expenseData))
    }, [expenseData?.count])

    useEffect(() => {
        dispatch(updateCategory(categoryData))
    }, [categoryData?.data?.length])

    useEffect(() => {
        dispatch(updateBudget(budgetData))
    }, [budgetData?.count])

    if (!availExpense) setAvailExpense(true)
    if (!availIncome) setAvailIncome(true)
    if (!availBudget) setAvailBudget(true)
    if (!availCategoryData) setCategoryData(true)


    var percent = parseInt((expenseData?.total / budgetData?.total) * 100)


    return (
        <div className="p-0 md:p-4 w-full">
            <div className=" bg-slate-100 rounded-md p-2 grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="p-6 space-y-10 w-[90%]">
                    <div className="p-4 bg-white space-y-5 rounded-lg drop-shadow-lg">
                        <h3 className=" text-gray-300">Total Expense</h3>
                        <h3 className="text-3xl">Rs {expenseData?.total}</h3>
                    </div>
                    <div className="space-y-3 ">
                        <div className="flex justify-between">
                            <div>Budget Spend</div>
                            <div>Rs {expenseData?.total}/ <span className=" text-slate-400">{budgetData?.data.length === 0 ? <>Budget Not Set</> : "Rs" + budgetData?.total}</span></div>
                        </div>
                        <div className="h-3 w-full bg-slate-400 rounded-xl">
                            <div style={{ width: `${percent <= 100 ? percent : 100}%` }} className={`h-3 ${percent > 100 ? 'bg-red-600' : ' bg-slate-500'} rounded-xl red`}></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 border border-slate-500 rounded-lg p-2">

                        <ChartBarSquareIcon className='h-10 w-10 text-slate-400'></ChartBarSquareIcon>

                        <div className='flex justify-end flex-col space-y-4'>
                            <p className='text-slate-400'>Investment</p>
                            <p className='font-bold'>Rs {incomeData?.total}</p>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-green-500'>40%</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between border-b-2 pb-3'>
                            <h2 className='font-bold'>Last Spending</h2>
                            <p className='text-gray-400'>View All</p>
                        </div>
                        <div className='p-5 space-y-4'>
                            <ExpenseDataList expenseData={expenseData} dataLimit={3}></ExpenseDataList>
                        </div>
                    </div>

                </div>
                <div className='p-6 flex flex-col md:items-center md:justify-between space-y-10 '>
                    <div className='space-y-4'>
                        <h2 className='font-bold'>Quick Actions</h2>
                        <Quickaction incomeRefetch={incomeRefetch} expenseRefetch={expenseRefetch} categoryRefetch={categoryRefetch} budgetRefetch={budgetRefetch}></Quickaction>
                    </div>
                    <div className='flex w-full md:w-[60%] items-center flex-col space-y-6' >
                        <h2 className='font-bold '>Category Wise Expense</h2>
                        {expenseData?.data.length > 0 ? <PieChart data={categoryData?.data}></PieChart> : <div>No Data</div>}
                    </div>

                </div>
            </div>

        </div >
    )
}

export default memo(Content)