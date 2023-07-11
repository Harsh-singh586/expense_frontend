import ExpenseDataList from "./expenseDataList"
import LineChart from "./linechart"
import PieChart from '../dashboard/piechart'
import CategoryDataList from "./categoryDataList"

export function DateData(props) {
    console.log('expense', props.expense)

    return (
        <div className="w-full border-8 p-4 flex items-center flex-col">
            <div className="p-6 md:w-[70%] flex justify-center">
                {props.expenseDateData ? <LineChart data={props.expenseDateData.data} type="D"></LineChart> : <p>No data</p>}
            </div>
            <div className="w-full">
                <ExpenseDataList expenseData={props.expense} dataLimit={5}></ExpenseDataList>
            </div>
        </div>
    )
}


export function CategoryData(props) {
    console.log('expense---------', props)

    return (
        <div className="w-full border-8 p-4 flex items-center flex-col">
            <div className="p-6 w-full md:w-1/3 flex justify-center">
                {props.categorydata ? <PieChart data={props.categorydata.data}></PieChart> : <p>No data</p>}
            </div>
            <div className="w-full">
                <CategoryDataList categoryData={props.categorydata}></CategoryDataList>
            </div>
        </div>
    )
}