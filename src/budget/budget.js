import { useQuery } from "react-query";
import { getCategoryBudget } from "../utis"
import PieChart from "../dashboard/piechart";
import BudgetDataList from "./budgetDataList";

export default function Budget() {
    var { data, error, refetch } = useQuery("budget", () => getCategoryBudget(6))
    console.log(data)
    return (
        <div className="w-full flex items-center flex-col space-y-4">
            <div className="p-4 w-full md:w-1/3 ">
                <PieChart data={data?.data} type="M"></PieChart>
            </div>
            <div className="w-full md:w-1/2 p-4 border-2">
                <BudgetDataList incomeData={data} dataLimit={5}></BudgetDataList>
            </div>
        </div>
    )


}