import { useQuery } from "react-query";
import { getMonthlyIncome } from "../utis"
import LineChart from "../expense/linechart";
import IncomeDataList from "./incomeDataList";

export default function Income() {
    var { data, error, refetch } = useQuery("income", getMonthlyIncome)
    return (
        <div className="w-full flex items-center flex-col space-y-4">
            <div className="p-4 w-full md:w-1/2 ">
                <LineChart data={data?.data} type="M"></LineChart>
            </div>
            <div className="w-full md:w-1/2 p-4 border-2">
                <IncomeDataList incomeData={data} dataLimit={5}></IncomeDataList>
            </div>
        </div>
    )


}